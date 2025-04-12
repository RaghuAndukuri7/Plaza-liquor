import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import './styles/HeroCarousel.css';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  
  const slides = [
    {
      id: 1,
      image: './images/hero/whiskey-hero.jpg',
      productImage: './images/products/whiskey-bottle.png',
      title: 'Premium Whiskey Collection',
      subtitle: 'Discover our exclusive selection of fine whiskeys from around the world',
      buttonText: 'Shop Now'
    },
    {
      id: 2,
      image: './images/hero/wine-hero.jpg',
      productImage: './images/products/wine-bottle.png',
      title: 'Exquisite Wine Selection',
      subtitle: 'Perfect pairings for every occasion and palate',
      buttonText: 'Explore Wines'
    },
    {
      id: 3,
      image: './images/hero/craft-beer-hero.jpg',
      productImage: './images/products/beer-bottle.png',
      title: 'Craft Beer Experience',
      subtitle: 'Local and international craft brews for the connoisseur',
      buttonText: 'Discover Beers'
    }
  ];

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: false,
    fade: true,
    pauseOnHover: false
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="hero-slide">
            <div className="hero-image-overlay"></div>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className={`hero-image ${loadedImages[slide.id] ? 'loaded' : ''}`}
              loading="eager"
              onLoad={() => handleImageLoad(slide.id)}
            />
            
            <div className="hero-content">
              <div className="hero-content-container">
                <div className="hero-product-container">
                  <motion.img 
                    src={slide.productImage} 
                    alt="Featured Product"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className={`hero-product-image ${loadedImages[slide.id] ? 'loaded' : ''}`}
                    loading="eager"
                    onLoad={() => handleImageLoad(slide.id)}
                  />
                </div>
                
                <div className="hero-text-container">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="hero-title"
                  >
                    {slide.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="hero-subtitle"
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="hero-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slide.buttonText}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;