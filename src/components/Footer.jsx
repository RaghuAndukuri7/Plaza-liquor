import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faYelp 
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading">About Plaza Liquor</h3>
            <p className="footer-about-text">
              Your premier destination for fine spirits, wines, and beers. Serving the community since 1995 with exceptional selection and service.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faYelp} className="social-icon" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/products" className="footer-link">Our Products</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/brands" className="footer-link">Brands</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Store Hours */}
          <div className="footer-section">
            <h3 className="footer-heading">Store Hours</h3>
            <ul className="hours-list">
              <li className="hours-item">
                <span className="hours-days">Monday - Thursday</span>
                <span className="hours-time">9AM - 10PM</span>
              </li>
              <li className="hours-item">
                <span className="hours-days">Friday - Saturday</span>
                <span className="hours-time">9AM - 11PM</span>
              </li>
              <li className="hours-item">
                <span className="hours-days">Sunday</span>
                <span className="hours-time">10AM - 8PM</span>
              </li>
            </ul>
            
            <div className="contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <span className="contact-text">123 Liquor Lane, Beverage City, BC 12345</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <span className="contact-text">(123) 456-7890</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <span className="contact-text">info@plazaliquor.com</span>
              </div>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className="footer-section">
            <h3 className="footer-heading">We Accept</h3>
            <div className="payment-methods">
              <div className="payment-method">
                <img src="/images/payment/visa.png" alt="Visa" className="payment-icon" />
              </div>
              <div className="payment-method">
                <img src="./images/payment/mastercard.png" alt="Mastercard" className="payment-icon" />
              </div>
              <div className="payment-method">
                <img src="./images/payment/amex.png" alt="American Express" className="payment-icon" />
              </div>
              <div className="payment-method">
                <img src="./images/payment/discover.png" alt="Discover" className="payment-icon" />
              </div>
              <div className="payment-method">
                <img src="./images/payment/apple-pay.png" alt="Apple Pay" className="payment-icon" />
              </div>
              <div className="payment-method">
                <img src="./images/payment/paypal.png" alt="PayPal" className="payment-icon" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="copyright">
          <p className="copyright-text">&copy; {new Date().getFullYear()} Plaza Liquor Store. All Rights Reserved.</p>
          <p className="disclaimer-text">Please drink responsibly. Must be 21 or older to purchase alcohol.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;