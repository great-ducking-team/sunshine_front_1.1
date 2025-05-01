import React from 'react';
import PropTypes from 'prop-types';
import './breadcrumbs.css'; // Стили по БЭМ

const Breadcrumbs = ({ items, onItemClick }) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumbs__item">
            {index < items.length - 1 ? (
              <>
                <a 
                  href={item.url || '#'} 
                  className="breadcrumbs__link"
                  onClick={(e) => {
                    if (onItemClick) {
                      e.preventDefault();
                      onItemClick(item, index);
                    }
                  }}
                >
                  {item.title}
                </a>
                <span className="breadcrumbs__separator">›</span>
              </>
            ) : (
              <span className="breadcrumbs__current">{item.title}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  onItemClick: PropTypes.func,
};

export default Breadcrumbs;