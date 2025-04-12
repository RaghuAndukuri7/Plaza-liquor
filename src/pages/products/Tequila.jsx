import React from 'react';

const Tequila = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tequila Selection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tequila products will be listed here */}
        </div>
      </div>
    </div>
  );
};

export default Tequila;