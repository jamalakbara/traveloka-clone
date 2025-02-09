"use client";
import { useState } from "react";

const FilterCard = ({ filterName, filters }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (id) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{filterName}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 4.5L6 8.5L10 4.5"
              stroke="#235D9F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Filter List */}
      {isExpanded && (
        <div className="mt-4 space-y-3">
          {filters.map((filter) => (
            <label
              key={filter.id}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => toggleFilter(filter.id)}
            >
              <div
                className={`w-4 h-4 flex items-center justify-center border ${
                  selectedFilters.includes(filter.id)
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-400"
                } rounded`}
              >
                {selectedFilters.includes(filter.id) && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.5 12L10.5 16L18 8.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {filter.isImage && (
                <img
                  src={filter.imageUrl}
                  alt={filter.label}
                  className="w-4 h-4 object-cover"
                />
              )}

              <span className="text-gray-800 text-sm">
                {filter.label}{" "}
                <span className="text-gray-500">({filter.count})</span>
              </span>
            </label>
          ))}
        </div>
      )}

      {/* See All Button */}
      <button className="mt-4 text-blue-500 text-sm">See All</button>
    </div>
  );
};

export default FilterCard;
