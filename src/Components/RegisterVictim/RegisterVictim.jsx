import React, { useState, useRef  } from 'react';
import './RegisterVictim.css'; 
import { NavLink } from 'react-router-dom';

const RegisterVictimPage = () => {
  const [crimeID, setCrimeID] = useState('');
  const [lifeStatus, setLifeStatus] = useState('');
  const [nic, setNIC] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephoneNo, setTelephoneNo] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [landMark, setLandMark] = useState('');
  const [additionalDescription, setAdditionalDescription] = useState('');
  const [photos, setPhotos] = useState([]); 
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const fileInputRef = useRef(null);

  const handlePhotoChange = (event) => {
    const selectedPhotos = event.target.files;
    setPhotos([...photos, ...selectedPhotos]);
  };

  const handleRemovePhoto = () => {
    if (selectedPhotoIndex !== null) {
      const updatedPhotos = [...photos];
      updatedPhotos.splice(selectedPhotoIndex, 1);
      setPhotos(updatedPhotos);
      setSelectedPhotoIndex(null);
    }
  };

  const handleRemoveAllPhotos = () => {
    setPhotos([]);
    setSelectedPhotoIndex(null);
  };
  const handleAddMorePhotosClick = () => {
    
    
    fileInputRef.current.click();
  };

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handleLifeStatusChange = (event) => {
    setLifeStatus(event.target.value);
  };

  const handleRegistration = () => {
    
    console.log('Registration submitted:', {
      crimeID,
      lifeStatus,
      nic,
      firstName,
      lastName,
      telephoneNo,
      province,
      city,
      area,
      address,
      landMark,
      additionalDescription,
      photos: photos.map((photo) => photo.name),
      
    });

    
  };

  return (
    <div className="registration-container">
      <h3>Register Victim</h3>
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
          <label htmlFor="lifeStatus" className="p1">Life Status</label>
          <div className="radio-buttons-container">
            <input
              className="lavender-radio"
              type="radio"
              id="alive"
              value="Alive"
              checked={lifeStatus === 'Alive'}
              onChange={handleLifeStatusChange}
            />
            <label className='ale' htmlFor="alive">Alive</label>

            <input
              className='lavender-radio'
              type="radio"
              id="dead"
              value="Dead"
              checked={lifeStatus === 'Dead'}
              onChange={handleLifeStatusChange}
            />
            <label className='ale' htmlFor="dead">Dead</label>
          </div>
        </div>


        <div className="input-container">
          <label htmlFor="nic" className='p1'>NIC</label>
          <input
            type="text"
            id="nic"
            value={nic}
            onChange={(e) => setNIC(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="firstName" className='p1'>First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastName" className='p1'>Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="telephoneNo" className='p1'>Telephone No</label>
          <input
            type="text"
            id="telephoneNo"
            value={telephoneNo}
            onChange={(e) => setTelephoneNo(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="province" className='p1'>Province</label>
          <input
            type="text"
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="city" className='p1'>City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="area" className='p1'>Area</label>
          <input
            type="text"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="address" className='p1'>Address (optional)</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="landMark" className='p1'>Land Mark(optional)</label>
          <input
            type="text-area"
            id="landMark"
            value={landMark}
            onChange={(e) => setLandMark(e.target.value)}
            className="large-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="additionalDescription" className='p1'>Additional Description(about the Victim| optional)</label>
          <input
            type="text-area"
            id="additionalDescription"
            value={additionalDescription}
            onChange={(e) => setAdditionalDescription(e.target.value)}
            className="large-input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="photo" className="p1">
            Photos of Victim
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            multiple
            onChange={handlePhotoChange}
            className="photo-input"
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          
        
        </div>
        <div className="photo-preview">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`photo-cell ${selectedPhotoIndex === index ? 'selected' : ''}`}
            onClick={() => handlePhotoClick(index)}
          >
            <img src={URL.createObjectURL(photo)} alt={`Uploaded Crime ${index}`} />
          </div>
        ))}
      </div>
        <div className="action-buttons">
          <button className="remove-button" onClick={handleRemovePhoto}>
            <div className="icon-circle">
              <span>-</span>
            </div>
            Remove Photo
          </button>
          <button className="add-button" onClick={handleAddMorePhotosClick}>
            <div className="icon-circle">
              <span>+</span>
            </div>
            Add more Photos
          </button>
        </div>
        
        <button onClick={handleRegistration} className="btn" >
        <NavLink to="/RegisterEvidencefull">Register </NavLink>
        </button>
      </div>
    </div>
  );
};

export default RegisterVictimPage;
