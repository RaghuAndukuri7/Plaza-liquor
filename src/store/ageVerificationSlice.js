import { createSlice } from '@reduxjs/toolkit';

const ageVerificationSlice = createSlice({
  name: 'ageVerification',
  initialState: {
    isVerified: false,
  },
  reducers: {
    verifyAge: (state) => {
      state.isVerified = true;
      // Set cookie for 30 days
      document.cookie = "ageVerified=true; max-age=2592000; path=/";
    },
    rejectAge: (state) => {
      state.isVerified = false;
    },
    checkVerification: (state) => {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      state.isVerified = cookies.includes('ageVerified=true');
    }
  }
});

export const { verifyAge, rejectAge, checkVerification } = ageVerificationSlice.actions;
export default ageVerificationSlice.reducer;