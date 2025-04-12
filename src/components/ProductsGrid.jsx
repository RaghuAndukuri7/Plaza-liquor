import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles/ProductsGrid.css';

const products = [
  { id: 1, name: 'Whiskey', image: '/images/productType/whiskey.jpg', link: '/products/whiskey' },
  { id: 2, name: 'Tequila', image: '/images/productType/tequila.jpg', link: '/products/tequila' },
  { id: 3, name: 'Vodka', image: '/images/productType/vodka.jpg', link: '/products/vodka' },
  { id: 4, name: 'GIN', image: '/images/productType/gin.jpg', link: '/products/gin' },
  { id: 5, name: 'Cognac & Brandy', image: '/images/productType/cognac.jpg', link: '/products/cognac' },
  { id: 6, name: 'RUM', image: '/images/productType/rum.jpg', link: '/products/rum' },
  { id: 7, name: 'Wine', image: '/images/productType/wine.jpg', link: '/products/wine' },
  { id: 8, name: 'Champagne', image: '/images/productType/champagne.jpg', link: '/products/champagne' },
  { id: 9, name: 'Beers', image: '/images/productType/beer.jpg', link: '/products/beers' },
];

const ProductsGrid = () => {
  return (
    <section className="products-grid-section">
      <div className="products-container">
        <h2 className="products-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="product-card"
            >
              <Link to={product.link}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                />
                <div className="product-overlay">
                  <h3 className="product-name">{product.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;