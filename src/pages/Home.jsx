import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import AboutUs from '../components/AboutUs';
import ProductsGrid from '../components/ProductsGrid';
import SpecialOffer from '../components/SpecialOffer';
import Brands from '../components/Brands';
import StoreInfo from '../components/StoreInfo';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroCarousel />
      <AboutUs />
      <ProductsGrid />
      <SpecialOffer />
      <Brands />
      <StoreInfo />
    </div>
  );
};

export default Home;