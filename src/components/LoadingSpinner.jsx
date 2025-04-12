import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 bg-opacity-50 fixed inset-0 z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-600 mb-4"></div>
        <p className="text-white text-lg font-semibold">Loading Plaza Liquor...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;