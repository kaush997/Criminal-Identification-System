import React, { useState, useRef  } from 'react';
import './UpdateEvidence.css';

const RegisterEvidence = () => {
  const [crimeID, setCrimeID] = useState('');
  const [evidenceID, setEvidenceID] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [evidencePhoto, setEvidencePhoto] = useState(null);
  const [victimPhotos, setVictimPhotos] = useState([]);
  const [selectedVictimPhotoIndex, setSelectedVictimPhotoIndex] = useState(null);

  const fileInputRef = useRef(null);

  const handleEvidencePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setEvidencePhoto(selectedPhoto);
  };

  const handleVictimPhotoChange = (event) => {
    const selectedPhotos = event.target.files;
    setVictimPhotos([...victimPhotos, ...selectedPhotos]);
  };

  const handleRemoveVictimPhoto = () => {
    if (selectedVictimPhotoIndex !== null) {
      const updatedPhotos = [...victimPhotos];
      updatedPhotos.splice(selectedVictimPhotoIndex, 1);
      setVictimPhotos(updatedPhotos);
      setSelectedVictimPhotoIndex(null);
    }
  };

  const handleRemoveAllVictimPhotos = () => {
    setVictimPhotos([]);
    setSelectedVictimPhotoIndex(null);
  };

  const handleAddMoreVictimPhotosClick = () => {
    fileInputRef.current.click();
  };

  const handleVictimPhotoClick = (index) => {
    setSelectedVictimPhotoIndex(index);
  };

  const handleRegistration = () => {
 
    console.log('Registration submitted:', {
      crimeID,
      evidenceID,
      testimonial,
      evidencephoto: evidencePhoto ? evidencePhoto.name : null,
      victimPhotos: victimPhotos.map((photo) => photo.name),
      
    });
  };

  return (
    <div className="registration-container">
      <h3>Update Evidence</h3>
      <div className="registration-form">
        <div className="input-container">
          <label htmlFor="crimeID" className='p1'>Crime ID</label>
          <input
            type="text"
            id="crimeID"
            value={crimeID}
            onChange={(e) => setCrimeID(e.target.value)}
          />
        </div>
        
        <div className="input-container">
          <label htmlFor="evidenceID" className='p1'>Evidence ID</label>
          <input
            type="text"
            id="evidenceID"
            value={evidenceID}
            onChange={(e) => setEvidenceID(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="photo" className="p1">
          Photo of the Evidence
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handleEvidencePhotoChange}
            className="photo-input"
          />
        </div>
        {evidencePhoto && (
          <div className="photo-preview-evidence">
            <h6 ><center>--- Uploaded Evidence Photo ---</center></h6>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <img src={URL.createObjectURL(evidencePhoto)} alt="Uploaded Crime" style={{ maxWidth: '200px', maxHeight: '200px' }}/>
          </div>
          </div>
        )}

        <div className="input-container">
          <label htmlFor="testimonial" className='p1'>Testimonial(about the Evidence| optional)</label>
          <input
            type="text-area"
            id="testimonial"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            className="large-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="victimPhotos" className="p1">
            Photos of Victim
          </label>
          <input
            type="file"
            id="victimPhotos"
            accept="image/*"
            multiple
            onChange={handleVictimPhotoChange}
            className="photo-input"
            ref={fileInputRef} 
            style={{ display: 'none' }} 
          />
          
        
        </div>
        <div className="photo-preview">
            {victimPhotos.map((photo, index) => (
              <div
                key={index}
                className={`photo-cell ${selectedVictimPhotoIndex === index ? 'selected' : ''}`}
                onClick={() => handleVictimPhotoClick(index)}
              >
                <img src={URL.createObjectURL(photo)} alt={`Uploaded Victim Photo ${index}`} />
              </div>
            ))}
          </div>

          <div className="action-buttons">
            <button className="remove-button" onClick={handleRemoveVictimPhoto}>
              <div className="icon-circle">
                <span>-</span>
              </div>
              Remove this Photo
            </button>
            <button className="add-button" onClick={handleAddMoreVictimPhotosClick}>
              <div className="icon-circle">
                <span>+</span>
              </div>
              Add more Photos
            </button>
          </div>

        
        <button onClick={handleRegistration} className="btn" >
          Update 
        </button>
      </div>
    </div>
  );
};

export default RegisterEvidence;
