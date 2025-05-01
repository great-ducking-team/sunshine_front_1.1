import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Item-card.css';
import gradient from '../../assets/images/gradient_b-b_0_100.png';
import arrowLineRight from '../../assets/icons/arrow_line_pointing_right_thin.svg';
import truckETA from '../../assets/icons/truck_ETA_thin.svg';

const ItemCard = ({ 
    images = [], // Значение по умолчанию - пустой массив
    title = '', 
    price = '', 
    mileage = '', 
    specs = '', 
    eta = '', 
    countryFlag = '' 
}) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };
    
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };
    
    const handleNextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % images.length
        );
    };
    
    const handlePrevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <li className="itemFeed_vehicle"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setCurrentImageIndex(0);
            }}>
            <Link className="itemFeed_vehicle_linkOnly" to="/listing">
                <div className='img-container'>
                    <img className='gradient-fadeout' src={gradient} alt='img'/>
                    <img className="item-feed-vehicle-img" src={images[currentImageIndex]} alt='img'/>  
                    
                    {(isHovered || isFavorite) && (   
                        <button
                            className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
                            onClick={handleFavoriteClick}
                        > 
                            <svg
                                width="32" 
                                height="32" 
                                fill={isFavorite ? "#fff" : "none"} 
                                stroke={isFavorite ? "#fff" : "#fff"} 
                                strokeWidth="2"
                            >
                                <path 
                                    d="M17.2459 3.87743L19.5337 8.49074C19.8456 9.13293 20.6775 9.74891 21.3795 9.86687L25.526 10.5615C28.1777 11.0071 28.8016 12.9468 26.8909 14.8602L23.6672 18.1105C23.1213 18.661 22.8223 19.7226 22.9913 20.4827L23.9142 24.5062C24.6421 27.691 22.9653 28.923 20.1706 27.2585L16.284 24.9387C15.5821 24.5194 14.4252 24.5194 13.7103 24.9387L9.82375 27.2585C7.04205 28.923 5.35224 27.6779 6.08016 24.5062L7.00306 20.4827C7.17204 19.7226 6.87307 18.661 6.32713 18.1105L3.10349 14.8602C1.2057 12.9468 1.81663 11.0071 4.46834 10.5615L8.61488 9.86687C9.3038 9.74891 10.1357 9.13293 10.4477 8.49074L12.7354 3.87743C13.9833 1.37419 16.0111 1.37419 17.2459 3.87743Z"
                                />
                            </svg>
                        </button> 
                    )}
                    
                    {isHovered && images.length > 1 && (
                        <div className="image-navigation">
                            <button 
                                className="nav-button prev-button" 
                                onClick={handlePrevImage}
                            >
                                &lt;
                            </button>
                            <div className="image-counter">
                                {currentImageIndex + 1}/{images.length}
                            </div>
                            <button 
                                className="nav-button next-button" 
                                onClick={handleNextImage}
                            >
                                &gt;
                            </button>
                        </div>
                    )}
                </div>   
                
                <div className="itemFeed_vehicle_infoblock">
                    <div className="itemFeed_vehicle_info_L1">
                        <div className="itemFeed_vehicle_name">{title}</div>
                        <div className="itemFeed_vehicle_mileage">{mileage}</div>
                    </div>
                    <div className="itemFeed_vehicle_info_L2">
                        <div className="itemFeed_vehicle_specs">{specs}</div>
                    </div>
                    <div className="itemFeed_vehicle_info_L3">
                        <div className="itemFeed_vehicle_ETA">{eta}</div>
                        <img className="itemFeed_vehicle_iconArrow" src={arrowLineRight} alt='img'/>
                        <img className="itemFeed_vehicle_truckETA" src={truckETA} alt='img'/>
                        <img className="itemFeed_vehicle_flag" src={countryFlag} alt='img'/>
                        <div className="itemFeed_vehicle_price">{price}</div>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default ItemCard;