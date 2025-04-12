import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import AgeVerification from './components/AgeVerification';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Brands = lazy(() => import('./pages/Brands'));

// Lazy-loaded product pages
// In App.js
const Whiskey = lazy(() => import('./pages/products/Whiskey'));
const Tequila = lazy(() => import('./pages/products/Tequila'));
const Vodka = lazy(() => import('./pages/products/Vodka'));
const Gin = lazy(() => import('./pages/products/Gin'));
const CognacBrandy = lazy(() => import('./pages/products/CognacBrandy'));
const Rum = lazy(() => import('./pages/products/Rum'));
const Wine = lazy(() => import('./pages/products/Wine'));
const Champagne = lazy(() => import('./pages/products/Champagne'));
const Beer = lazy(() => import('./pages/products/Beer'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* Age Verification Modal */}
          <AgeVerification />
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main Content with Suspense for lazy loading */}
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Product Routes */}
                <Route path="/products/whiskey" element={<Whiskey />} />
                <Route path="/products/tequila" element={<Tequila />} />
                <Route path="/products/vodka" element={<Vodka />} />
                <Route path="/products/gin" element={<Gin />} />
                <Route path="/products/cognac-brandy" element={<CognacBrandy />} />
                <Route path="/products/rum" element={<Rum />} />
                <Route path="/products/wine" element={<Wine />} />
                <Route path="/products/champagne" element={<Champagne />} />
                <Route path="/products/beer" element={<Beer />} />
                
                {/* 404 Page */}
                <Route path="*" element={<div>404 Not Found</div>} />
              </Routes>
            </Suspense>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;