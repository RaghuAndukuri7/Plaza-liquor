import { configureStore } from '@reduxjs/toolkit';
import ageVerificationReducer from './ageVerificationSlice';

export default configureStore({
  reducer: {
    ageVerification: ageVerificationReducer
  }
});