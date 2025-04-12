import React from 'react';
import './styles/AboutUs.css';
//import storeImage from './images/store/liquor-store-interior.jpg'; // Replace with your image

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us-image-wrapper">
          <img src='./images/store/liquor-store-interior.jpg' alt="Plaza Liquor Store" className="about-us-image" />
          <div className="price-tag-badge">
            <span>Lowest Prices Guaranteed!</span>
          </div>
        </div>

        <div className="about-us-content">
          <h2 className="section-title">
            <span className="title-highlight">Why Plaza Liquor?</span>
          </h2>
          <h3 className="section-subtitle">We're the CHEAPEST liquor store in town!</h3>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h4>Price Match Promise</h4>
              <p>Find it cheaper? We'll beat any competitor's price by 5%!</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4>18 Years Serving You</h4>
              <p>Trusted since 2005 for quality and savings</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h4>Bulk Discounts</h4>
              <p>Save even more when you buy by the case</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h4>Weekly Specials</h4>
              <p>Rotating deals on top brands</p>
            </div>
          </div>
          
          <div className="cta-box">
            <p className="cta-text">Don't overpay for your drinks!</p>
            <button className="cta-button">Visit Us Today & Save</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;