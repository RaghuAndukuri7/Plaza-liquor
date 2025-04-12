import React from 'react';
import { motion } from 'framer-motion';
import './styles/StoreInfo.css';

const StoreInfo = () => {
  return (
    <section className="store-info-section">
      <div className="store-info-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="store-info-content"
        >
          <h2 className="store-info-title">Why Plaza Liquor?</h2>
          <h3 className="store-info-subtitle">The Cheapest Liquor Prices in Town - Guaranteed!</h3>
          
          <div className="store-info-points">
            <div className="info-point">
              <div className="point-icon">💰</div>
              <div className="point-content">
                <h4>Lowest Price Promise</h4>
                <p>We're not just competitive - we're the cheapest! Find a lower advertised price on any item we carry, and we'll beat it by 5%. That's our ironclad guarantee.</p>
              </div>
            </div>
            
            <div className="info-point">
              <div className="point-icon">🍾</div>
              <div className="point-content">
                <h4>Premium Selection, Budget Prices</h4>
                <p>From top-shelf spirits to everyday favorites, we offer the area's widest selection at prices that will make you do a double-take. Quality doesn't have to break the bank!</p>
              </div>
            </div>
            
            <div className="info-point">
              <div className="point-icon">🛒</div>
              <div className="point-content">
                <h4>More Savings Every Day</h4>
                <p>Our bulk discounts, weekly specials, and loyalty rewards mean you'll save even more on already unbeatable prices. The more you buy, the more you save!</p>
              </div>
            </div>
          </div>
          
          <div className="store-info-cta">
            <p className="price-challenge">Don't believe we're the cheapest? Come challenge our prices!</p>
            <p className="store-slogan">"Plaza Liquor - Where Your Dollar Buys More Cheers!"</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreInfo;