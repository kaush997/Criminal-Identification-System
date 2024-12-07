import React from 'react';
import '../Components.css';

function SearchBox({ searchValue, onSearchValueChange }) {
  return (
    <div className="search-boxA">
      <input
        type="text"
        placeholder="Type NIC or Name here"
        className="search-inputA"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export default SearchBox;

