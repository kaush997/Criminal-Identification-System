import React from 'react';
import '../Components.css';

function SearchButtonPO({ handleSearch }) {
  return (
   
    <a href='/SearchResult'><button className="search-button-PO" onClick={handleSearch}>
      Search
    </button></a>
    
  );
}

export default SearchButtonPO;

