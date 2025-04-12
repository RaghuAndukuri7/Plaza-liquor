import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faTimes, faTag } from '@fortawesome/free-solid-svg-icons';
import './styles//Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Coupon Ribbon Banner */}
      <div className="coupon-banner">
        <div className="coupon-content">
          <FontAwesomeIcon icon={faTag} className="coupon-icon" />
          <span className="coupon-text">20% OFF ON ORDERS ABOVE $250 • USE CODE: <strong>PLAZA20</strong></span>
          <div className="coupon-triangles"></div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo-container">
            <Link to="/">
              <img src="./images/logo.png" alt="Plaza Liquor" className="navbar-logo" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Our Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/brands" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Brands
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* User Actions */}
          <div className="user-actions">
            <Link to="/login" className="user-login-link">
              <FontAwesomeIcon icon={faUser} className="user-icon" />
              <span>Login/Signup</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;