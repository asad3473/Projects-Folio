import React from 'react';

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative">
        {/* Full chart circle background */}
        <div className="w-24 h-24 rounded-full border-8 border-black"></div>

        {/* Orange animated segment */}
        <div className="absolute inset-0 w-24 h-24 border-8 border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>

        {/* Center circle for the chart */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-12 h-12 bg-black rounded-full"></div>
        </div>

        {/* Optional Loading Text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-orange-500 font-bold text-sm">Loading...</span>
        </div>
      </div>
    </div>
  );
}
