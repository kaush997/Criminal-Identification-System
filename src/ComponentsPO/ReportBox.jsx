import React, { useState } from 'react';
import '../Components.css';
import { Link } from "react-router-dom";

function ReportBox() {
  const [selectedSearchOption, setSelectedSearchOption] = useState('Criminal ID');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchOptionChange = (event) => {
    setSelectedSearchOption(event.target.value);
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for ${selectedSearchOption}: ${searchValue}`);
  };

  return (
    <div>
      <div className="Report-options-PO">
      <label className='radio-po-label1'>Criminal ID</label>
          <input
            id='Criminal ID'
            type="radio"
            value="Criminal ID"
            className='radio-police'
            checked={selectedSearchOption === 'Criminal ID'}
            onChange={handleSearchOptionChange}
          />
          
    
       
        <p className='ab-PO'>If you need included all crimes click here</p>
        
        <label className='radio-po-label2'>Crime ID</label>
          <input
            id='Crime ID'
            type="radio"
            value="Crime ID"
            className='radio-police'
            checked={selectedSearchOption === 'Crime ID'}
            onChange={handleSearchOptionChange}
          />
          
       
      
        <p className='ab-PO'>If you need a report for one crime click here</p>
      </div>

      <div className="Request-box-PO">
        <input
          type="text"
          placeholder="Type ID here"
          className="Request-input-PO"
          value={searchValue}
          onChange={handleSearchValueChange}
        />
      </div>

      <Link to="/ReportResponse">
        <button className="Request-button-PO" onClick={handleSearch}>
          Send Request
        </button>
      </Link>
    </div>
  );
}

export default ReportBox;
