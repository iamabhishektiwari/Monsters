import React from "react";

const SearchBar = ({ placeholder, handleSearch }) => {
  return (
    <div>
      <input type="search" placeholder={placeholder} onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
