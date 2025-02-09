"use client";
import React, { useState } from "react";

const PriceRangeCard = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(16000000);

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    const name = e.target.name;
    if (name === "min") {
      setMinPrice(Math.min(value, maxPrice - 1));
    } else {
      setMaxPrice(Math.max(value, minPrice + 1));
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-900 text-lg font-semibold">Price Range</h3>
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={() => {
            setMinPrice(0);
            setMaxPrice(16000000);
          }}
        >
          Reset
        </button>
      </div>
      <p className="text-gray-500 text-sm">Per room, per night</p>
      <div className="flex flex-col space-y-4 mt-4">
        <div className="flex items-center border rounded-lg p-2">
          <span className="text-gray-900 mr-2">IDR</span>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-full p-1 text-gray-900 border-none outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <span className="text-gray-900 mr-2">IDR</span>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full p-1 text-gray-900 border-none outline-none"
          />
        </div>
      </div>
      <div className="relative mt-6">
        <input
          type="range"
          name="min"
          min="0"
          max="16000000"
          value={minPrice}
          onChange={handleSliderChange}
          className="absolute w-full h-1 bg-transparent appearance-none"
          style={{ zIndex: 2 }}
        />
        <input
          type="range"
          name="max"
          min="0"
          max="16000000"
          value={maxPrice}
          onChange={handleSliderChange}
          className="absolute w-full h-1 bg-transparent appearance-none"
          style={{ zIndex: 2 }}
        />
        <div className="w-full h-1 bg-gray-300 rounded-full" />
        <div
          className="absolute top-0 h-1 bg-blue-500 rounded-full"
          style={{
            left: `${(minPrice / 16000000) * 100}%`,
            width: `${((maxPrice - minPrice) / 16000000) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default PriceRangeCard;
