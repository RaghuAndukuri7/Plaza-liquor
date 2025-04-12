import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { verifyAge, rejectAge, checkVerification } from '../store/ageVerificationSlice';
import { motion } from 'framer-motion';
import './styles/AgeVerification.css';

const AgeVerification = () => {
  const dispatch = useDispatch();
  const isVerified = useSelector(state => state.ageVerification.isVerified);
  
  useEffect(() => {
    dispatch(checkVerification());
  }, [dispatch]);

  const handleYes = () => {
    dispatch(verifyAge());
  };

  const handleNo = () => {
    dispatch(rejectAge());
    window.location.href = 'https://www.google.com';
  };

  if (isVerified) return null;

  return (
    <div className="age-verification-overlay">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="age-verification-modal"
      >
        <h2 className="age-verification-title">Please verify that you are 21 years of age or older</h2>
        <div className="age-verification-buttons">
          <button 
            onClick={handleYes}
            className="age-btn age-btn-yes"
          >
            YES
          </button>
          <button 
            onClick={handleNo}
            className="age-btn age-btn-no"
          >
            NO
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AgeVerification;