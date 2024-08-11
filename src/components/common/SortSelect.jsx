import React from "react";

const SortSelect = ({ sortOrder, onSortChange }) => {
  return (
    <div className="flex items-center justify-end  font-poppins">
      <label htmlFor="sort" className="mr-2 text-gray-700">
        Sort By:
      </label>
      <select
        id="sort"
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
      >
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="recommended">Recommended</option>
        <option value="newestFirst">Newest First</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
};

export default SortSelect;
