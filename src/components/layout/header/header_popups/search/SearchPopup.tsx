import React from 'react';
import './search-popup.css';

type SearchResult = {
  id: number;
  title: string;
  price: string;
  year: number;
  image: string;
};

type SearchResultsPopupProps = {
  results: SearchResult[];
  onClose: () => void;
};

const SearchResultsPopup: React.FC<SearchResultsPopupProps> = ({ results, onClose }) => {
  return (
    <div className="search-results-popup">
      <div className="search-results-header">
        <h4>Результаты поиска</h4>
        <button onClick={onClose} className="search-results-close">
          &times;
        </button>
      </div>
      <div className="search-results-list">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="search-result-item">
              {/* <img src={result.image} alt={result.title} className="search-result-image" /> */}
              <div className="search-result-info">
                <h5>{result.title}</h5>
                <p>{result.year} год · {result.price} ₽</p>
              </div>
            </div>
          ))
        ) : (
          <div className="search-no-results">Ничего не найдено</div>
        )}
      </div>
      {results.length > 0 && (
        <div className="search-results-footer">
          <button className="search-results-show-all">Показать все результаты</button>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPopup;