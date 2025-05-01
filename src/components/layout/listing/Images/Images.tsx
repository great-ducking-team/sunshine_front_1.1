import React, { useState, useRef } from "react";
import './images.css';
import PricingBlock from "../Pricing_block/PricingBlock";
import img1 from './listing_images/listing_img1.jpg';
import img2 from './listing_images/listing_img2.jpg';
import img3 from './listing_images/listing_img3.jpg';
import img4 from './listing_images/listing_img4.jpg';
import img5 from './listing_images/listing_img5.jpg';
import img6 from './listing_images/listing_img6.jpg';
import img7 from './listing_images/listing_img6.jpg';
import img8 from './listing_images/listing_img6.jpg';


const CarImageGallery = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const thumbnailsRef = useRef(null);
  
    const openFullscreen = (index) => {
      setCurrentImageIndex(index);
      setIsFullscreen(true);
    };
  
    const closeFullscreen = () => setIsFullscreen(false);
  
    const scrollToThumbnail = (index) => {
      if (thumbnailsRef.current) {
        const thumbnails = thumbnailsRef.current;
        const thumbnail = thumbnails.children[index];
        thumbnail.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    };
  
    const handleThumbnailClick = (index) => {
      setCurrentImageIndex(index);
      scrollToThumbnail(index);
    };
  
    return (
      <div className="car-image-gallery-container">
        {/* Миниатюры в столбик */}
        <div className="thumbnails-column">
          {images.slice(0, 7).map((image, index) => (
            <div 
              key={index}
              onMouseEnter={() => setCurrentImageIndex(index)}
              className={`thumbnail-wrapper ${currentImageIndex === index ? 'active' : ''}`}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail-image"
              />
            </div>
          ))}
        </div>
        
        {/* Основное изображение */}
        <div className="main-image-container">
          <img 
            src={images[currentImageIndex]} 
            alt="Main car view"
            className="main-image"
            onClick={() => openFullscreen(currentImageIndex)}
          />
        </div>
  
        {/* Полноэкранный режим с лентой миниатюр */}
        {isFullscreen && (
          <div className="fullscreen-modal" onClick={closeFullscreen}>
            <div className="fullscreen-flex"> 
              
              <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
                {/* Основное изображение */}
                <img 
                  src={images[currentImageIndex]} 
                  alt="Fullscreen car view"
                  className="fullscreen-image"
                />
                
                {/* Лента миниатюр */}
                <div className="thumbnails-strip" ref={thumbnailsRef}>
                  {images.map((image, index) => (
                    <div 
                      key={index}
                      className={`strip-thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleThumbnailClick(index);
                      }}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="strip-thumbnail-image"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Кнопка закрытия */}
                <button className="close-button" onClick={closeFullscreen}>
                  &times;
                </button>
              </div>
              <div className='pricing-block'>
                <PricingBlock/>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default CarImageGallery;