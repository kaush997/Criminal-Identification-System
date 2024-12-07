import React, { useRef, useState } from 'react';
import '../Components.css';

const BiometricsButtons = ({ onFileUpload }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleScanFace = () => {
    // Handle Scan Face button click here
  };

  const handleUploadPhoto = () => {
    // Trigger a click on the file input element
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    // Handle the selected file here, e.target.files contains the selected file(s)
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file); // Pass the selected file to the parent component
    }
  };

  return (
    <div className="biometrics-buttons">
    <button className="button button-scan-face" onClick={handleScanFace}>
        Scan Face
      </button>
      <button className="button button-upload-photo" onClick={handleUploadPhoto}>
        Upload photo
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default BiometricsButtons;
