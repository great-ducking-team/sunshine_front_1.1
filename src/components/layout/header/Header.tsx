import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { miniPfp } from '../../../assets/images/images';
import burgerMenuIcon from '../../../assets/icons/burgerMenuIcon.svg'
import miniLogoIcon from '../../../assets/icons/miniLogoIcon.svg'
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import MessagePopup from './header_popups/messages/MessagePopup';
import FavoritePopup from './header_popups/favorites/FavoritePopup';
import SearchResultsPopup from './header_popups/search/SearchPopup';
import './header.css';
import './header_popups/search/search-popup.css';

import {
  logoIcon,
  searchIcon,
  messagesIcon,
  compareIcon,
  starIcon,
  miniIconPro,
  locateIcon
} from '../../../assets/icons/icons';

type MenuItem = {
  icon: string;
  title: string;
  className: string;
  onClick: () => void;
};

type SearchResult = {
  id: number;
  title: string;
  price: string;
  year: number;
  image: string;
};

const Header: React.FC = () => {
  const [showMessages, setShowMessages] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const messagesRef = useRef<HTMLDivElement>(null);
  const favoritesRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useOutsideClick(messagesRef, () => setShowMessages(false));
  useOutsideClick(favoritesRef, () => setShowFavorites(false));
  useOutsideClick(searchRef, () => setShowSearchResults(false));

  // Заглушка для поиска (в реальном проекте заменить на API вызов)
  const mockSearch = async (query: string) => {
    setIsSearching(true);
    // Имитация задержки API
    await new Promise(resolve => setTimeout(resolve, 150));
    
    if (query.length > 0) {
      // Имитация результатов поиска
      setSearchResults([
        {
          id: 1,
          title: 'Toyota Camry 2020',
          price: '2 500 000',
          year: 2020,
          image: 'https://example.com/camry.jpg'
        },
        {
          id: 2,
          title: 'BMW X5 2018',
          price: '3 800 000',
          year: 2018,
          image: 'https://example.com/x5.jpg'
        },
        {
          id: 3,
          title: 'Toyota Camry 2020',
          price: '2 500 000',
          year: 2020,
          image: 'https://example.com/camry.jpg'
        },
        {
          id: 4,
          title: 'Toyota Camry 2020',
          price: '2 500 000',
          year: 2020,
          image: 'https://example.com/camry.jpg'
        },
        {
          id: 5,
          title: 'Toyota Camry 2020',
          price: '2 500 000',
          year: 2020,
          image: 'https://example.com/camry.jpg'
        },
        {
          id: 6,
          title: 'Toyota Camry 2020',
          price: '2 500 000',
          year: 2020,
          image: 'https://example.com/camry.jpg'
        },
        {
          id: 7,
          title: 'Toyota Camry 2020',
          price: '2 500 000',
          year: 2020,
          image: 'https://example.com/camry.jpg'
        }
      ]);
    } else {
      setSearchResults([]);
    }
    
    setIsSearching(false);
    setShowSearchResults(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        mockSearch(searchQuery);
      } else {
        setSearchResults([]);
        setShowSearchResults(false);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      mockSearch(searchQuery);
    }
  };

const menuItems: MenuItem[] = [
    {
      icon: messagesIcon,
      title: 'Сообщения',
      className: 'messages',
      onClick: () => {
        setShowMessages((prev) => !prev);
        setShowFavorites(false);
      }
    },
    {
      icon: starIcon,
      title: 'Избранное',
      className: 'favorites',
      onClick: () => {
        setShowFavorites((prev) => !prev);
        setShowMessages(false);
      }
    }
];

return (
    <div className="header__container">
        {/* Логотип - будет заменяться на мини-версию на мобильных */}
        <Link to="/" className="header__logo">
          <img 
            src={logoIcon} 
            alt="Sunrise Logo" 
            className="header__logo-image" 
          />
          <img 
            src={miniLogoIcon} 
            alt="Sunrise Mini Logo" 
            className="header__logo-image--mobile" 
          />
        </Link>

        {/* Бургер-меню для мобильных */}
        <button 
          className="header__burger" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img src={burgerMenuIcon} alt="Menu" />
        </button>

          <div className="header__search-container" ref={searchRef}>
            <form className="header__search search" onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                spellCheck={false} 
                placeholder="Поиск объявлений" 
                required 
                className="search__input"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => searchQuery && setShowSearchResults(true)}
              />
              <img src={searchIcon} alt="Search" className="search__icon" />
              {isSearching && <div className="search__loading">Загрузка...</div>}
            </form>
            {showSearchResults && (
              <SearchResultsPopup 
                results={searchResults} 
                onClose={() => setShowSearchResults(false)}
              />
            )}
          </div>

          <nav className="header__nav">
            {menuItems.map(({ icon, title, className, onClick }) => (
              <div
                key={className}
                className={`header__nav-item header__nav-item--${className}`}
                role="button"
                onClick={onClick}
                style={{ position: 'relative' }}
              >
                <Link to="#" className="header__nav-link">
                  <img src={icon} alt={title} className="header__nav-icon" />
                  <span className="header__nav-title">{title}</span>
                </Link>
                {/* <Link to={/home}>
                </Link> */}
                {className === 'messages' && showMessages && (
                  <div ref={messagesRef} style={{ position: 'absolute', top: '100%', right: 0, zIndex: 100 }}>
                    <MessagePopup />
                  </div>
                )}
                {className === 'favorites' && showFavorites && (
                  <div ref={favoritesRef} style={{ position: 'absolute', top: '100%', right: 0, zIndex: 100 }}>
                    <FavoritePopup />
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header__user">
            <Link to="/user" className="header__user-link">
              <img src={miniPfp} alt="User" className="header__user-avatar" />
              <span className="header__user-name">Разработчик</span>
              <img src={miniIconPro} alt="Pro" className="header__user-status" />
            </Link>
          </div>

          <div className="header__location">
            <div className="location">
              <img src={locateIcon} alt="Location" className="location__icon" />
              <span className="location__text">Санкт-Петербург, Россия</span>
            </div>
            <button className="header__button">Разместить объявление</button>
          </div>

        {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="header__mobile-menu">
          <nav className="header__mobile-nav">
            {menuItems.map(({ icon, title, className, onClick }) => (
              <div
                key={className}
                className={`header__mobile-nav-item`}
                onClick={() => {
                  onClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                <img src={icon} alt={title} className="header__mobile-nav-icon" />
                <span className="header__mobile-nav-title">{title}</span>
              </div>
            ))}
            <div className="header__mobile-user">
              <Link to="/user" className="header__mobile-user-link">
                <img src={miniPfp} alt="User" className="header__mobile-user-avatar" />
                <span className="header__mobile-user-name">Олег</span>
              </Link>
            </div>
            <div className="header__mobile-location">
              <div className="location">
                <img src={locateIcon} alt="Location" className="location__icon" />
                <span className="location__text">Санкт-Петербург, Россия</span>
              </div>
              <button className="header__mobile-button">Разместить объявление</button>
            </div>
          </nav>
        </div>
      )}
      </div>
  );
};

export default Header;
