import React from 'react';
import { motion } from 'framer-motion';
import './styles/SpecialOffer.css';

const SpecialOffer = () => {
  return (
    <section className="special-offer-section">
      <div className="special-offer-container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="special-offer-card"
        >
          <div className="offer-header">
            <h2 className="offer-title">EXCLUSIVE DISCOUNTS</h2>
            <div className="offer-badge">LIMITED TIME</div>
          </div>

          <div className="offer-groups">
            {/* Saluki Students Offer */}
            <div className="offer-group student-offer">
              <div className="group-icon">🎓</div>
              <div className="group-content">
                <h3>Saluki Students Special</h3>
                <p className="offer-description">
                  <strong>15% OFF</strong> all purchases with valid student ID<br />
                  <em>Excludes already discounted items</em>
                </p>
                <ul className="offer-benefits">
                  <li>Free bottle opener with first purchase</li>
                  <li>Happy Hour discounts every Thursday 4-7PM</li>
                  <li>Semester starter kits available</li>
                </ul>
              </div>
            </div>

            {/* Bulk Buyers Offer */}
            <div className="offer-group bulk-offer">
              <div className="group-icon">📦</div>
              <div className="group-content">
                <h3>Big Spender Bonus</h3>
                <p className="offer-description">
                  Spend <strong>$250+</strong> and get:<br />
                  <strong>10%</strong> cash back <strong>OR</strong> <strong>free delivery</strong> within 10 miles
                </p>
                <ul className="offer-benefits">
                  <li>Personal shopping assistant available</li>
                  <li>Special bulk pricing on cases</li>
                  <li>VIP early access to new arrivals</li>
                </ul>
              </div>
            </div>

            {/* Loyalty Offer */}
            <div className="offer-group loyalty-offer">
              <div className="group-icon">⭐</div>
              <div className="group-content">
                <h3>Valued Customer Rewards</h3>
                <p className="offer-description">
                  <strong>Triple points</strong> on all purchases this month<br />
                  Redeem points for <strong>free bottles</strong> or <strong>exclusive tastings</strong>
                </p>
                <ul className="offer-benefits">
                  <li>Birthday month special - free gift!</li>
                  <li>Members-only clearance events</li>
                  <li>Complimentary premium samples</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="offer-footer">
            <p className="disclaimer">
              *Some restrictions apply. Valid ID required for student discounts. 
              Cash back issued as store credit. Offer valid until {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
            </p>
            <button className="cta-button">
              CLAIM YOUR DISCOUNT NOW
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffer;