import React, { useState } from "react";
import Investigation from "../ComponentsPO/Investigation";
import OptionsPO from "../ComponentsPO/OptionsPO";
import BiometricsButtons from '../ComponentsPO/BiometricsButtons';
import SearchButtonPO from "../ComponentsPO/SearchButton";
import '../Styles.css';
import NavigationBarPO from '../ComponentsPO/NavigationbarPO';


function SearchBiometrics() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  return (
    <div>
        <nav>
        <NavigationBarPO/>
      </nav>
    <div className="SearchBiometrics-container">
      <div className='Biometrics-investigation'>
        <Investigation/>
      </div>
      <div className='Biometrics-options'>
        <OptionsPO/>
      </div>
      <div className='Biometrics-buttons'>
        <BiometricsButtons onFileUpload={handleFileUpload} />
      </div>
      <div className="Biometrics-photo-box">
      {uploadedFile && (
        <div>
          <img
            src={URL.createObjectURL(uploadedFile)}
            alt="Uploaded"
            style={{ maxWidth: '200px', maxHeight: '200px',border:'2px solid black' }}
          />
          <button style={{width:'150px', height:'40px', borderRadius:'0.5rem', backgroundColor:'#B72E2E', color:'white'}} onClick={() => setUploadedFile(null)}>Remove</button>
        </div>
      )}
      </div>
      <div className='Biometrics-searchbutton' >
        <SearchButtonPO/>
      </div>
    </div>
    </div>
  );
}

export default SearchBiometrics;



