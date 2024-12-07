import React, { useState, useEffect } from 'react';
import '../Components.css';

function OptionsPO() {
  const [selectedSearchOption, setSelectedSearchOption] = useState('Bio Data');

  useEffect(() => {
    // Use the URL pathname to determine the selected option
    const pathname = window.location.pathname;
    if (pathname === '/Search') {
      setSelectedSearchOption('Bio Data');
    } else if (pathname === '/SearchBiometrics') {
      setSelectedSearchOption('Biometrics');
    }
  }, []);

  const handleSearchOptionChange = (event) => {
    setSelectedSearchOption(event.target.value);
    // Redirect to the selected page based on the dropdown value
    if (event.target.value === 'Bio Data') {
      window.location.href = '/Search';
    } else if (event.target.value === 'Biometrics') {
      window.location.href = '/SearchBiometrics';
    }
  };

  return (
    <div className="search-options-police">
      <select
        id="searchOptions"
        value={selectedSearchOption}
        onChange={handleSearchOptionChange}
      >
        <option value="Bio Data">Bio Data</option>
        <option value="Biometrics">Biometrics</option>
      </select>
    </div>
  );
}

export default OptionsPO;
