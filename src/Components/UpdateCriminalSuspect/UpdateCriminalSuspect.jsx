import React, { useState, useRef } from 'react';
import './UpdateCriminalSuspect.css';


const UpdateCriminalSuspect = () => {
  const [crimeID, setCrimeID] = useState('');
  const [lifeStatus, setLifeStatus] = useState('');
  const [inCustody, setInCustody] = useState('');
  const [crimeJustified, setCrimeJustified] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [landMark, setLandMark] = useState('');
  const [victimPhotos, setVictimPhotos] = useState([]);
  const [selectedVictimPhotoIndex, setSelectedVictimPhotoIndex] = useState(null);
  const fileInputRef = useRef(null); 
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleAddForm = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };

  const toggleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };
 
  

 

  const handleRegistration = () => {
   
    console.log('Registration submitted:', {
      crimeID,
      lifeStatus,
      inCustody,
      crimeJustified,
      nicNumber,
      firstName,
      lastName,
      telephoneNumber,
      province,
      city,
      area,
      address,
      landMark,
      photo: photo ? photo.name : null,
      victimPhotos: victimPhotos.map((photo) => photo.name),
      
    
    });
  };


  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleLifeStatusChange = (event) => {
    setLifeStatus(event.target.value);
  };

  const handleInCustodyChange = (event) => {
    setInCustody(event.target.value);
  };

  const handleCrimeJustifiedChange = (event) => {
    setCrimeJustified(event.target.value);
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

  const handleAddMoreVictimPhotosClick = () => {
    fileInputRef.current.click();
  };

  const handleVictimPhotoClick = (index) => {
    setSelectedVictimPhotoIndex(index);
  };


  const handleAddData = () => {
    if (crimeID.trim() !== '' && description.trim() !== '') {
      const newDataItem = {
        id: Math.random().toString(36).substring(7),
        crimeID: crimeID,
        description: description,
      };

      setDataList([...dataList, newDataItem]);
      setCrimeID('');
      setDescription('');
      setIsAddFormVisible(false);
    }
  };

  const handleRemoveSelectedRows = () => {
    const updatedDataList = dataList.filter((item) => !selectedRows.includes(item.id));
    setDataList(updatedDataList);
    setSelectedRows([]);
  };

   
   const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleAddData();
    }
  };

  return (
    <div className="registration-container">
      <h3>Update Criminal/Suspect Details</h3>
      <div className="registration-form">
        <div className="input-container">
          <label htmlFor="crimeID" className='p1'>Criminal/Suspect ID</label>
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
          <label htmlFor="inCustody" className="p1">In Custody?</label>
          <div className="radio-buttons-container">
            <input
              className="lavender-radio"
              type="radio"
              id="yesInCustody"
              value="Yes"
              checked={inCustody === 'Yes'}
              onChange={handleInCustodyChange}
            />
            <label className='ale' htmlFor="yesInCustody">Yes</label>

            <input
              className='lavender-radio'
              type="radio"
              id="noInCustody"
              value="No"
              checked={inCustody === 'No'}
              onChange={handleInCustodyChange}
            />
            <label className='ale' htmlFor="noInCustody">No</label>
          </div>
        </div>

        <div className="input-container">
          <label htmlFor="crimeJustified" className="p1">Crime Justified?</label>
          <div className="radio-buttons-container">
            <input
              className="lavender-radio"
              type="radio"
              id="yesCrimeJustified"
              value="Yes"
              checked={crimeJustified === 'Yes'}
              onChange={handleCrimeJustifiedChange}
            />
            <label className='ale' htmlFor="yesCrimeJustified">Yes</label>

            <input
              className='lavender-radio'
              type="radio"
              id="noCrimeJustified"
              value="No"
              checked={crimeJustified === 'No'}
              onChange={handleCrimeJustifiedChange}
            />
            <label className='ale' htmlFor="noCrimeJustified">No</label>
          </div>
        </div>

        <div className="input-container">
          <label htmlFor="nicNumber" className='p1'>NIC Number</label>
          <input
            type="text"
            id="nicNumber"
            value={nicNumber}
            onChange={(e) => setNicNumber(e.target.value)}
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
          <label htmlFor="telephoneNumber" className='p1'>Telephone Number</label>
          <input
            type="text"
            id="telephoneNumber"
            value={telephoneNumber}
            onChange={(e) => setTelephoneNumber(e.target.value)}
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
          <label htmlFor="address" className='p1'>Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="landMark" className='p1'>Landmark(optional)</label>
          <input
            type="text"
            id="landMark"
            value={landMark}
            onChange={(e) => setLandMark(e.target.value)}
          />
        </div>



    <div className="input-container">
    <label htmlFor="victimPhotos" className="p1">
      Photos of Criminal
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
  


        
      </div>
    <div className="add-to-crimes-section">Add to crimes
      <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button"  >
             <img src="./assets/images/loupe.png" alt="Search" width='30px' height='30px' />
          </button>
     </div>
    </div>
    <div className="action-buttons">
       <button className="remove-button" onClick={handleRemoveSelectedRows}>
          <div className="icon-circle">
             <span>-</span>
          </div>
          Remove from list
       </button>
       <button className="add-button" onClick={toggleAddForm}>
          <div className="icon-circle">
             <span>+</span>
          </div>
          Add to crime list
        </button>
       <button className="view-button">
           <div className="icon-circle">
              <span>!</span>
           </div>
           View details
       </button>
    </div>

    {isAddFormVisible && (
        <div className="data-table">
          <div className="data-table-controls">
            <label>Crime ID:</label>
            <input
              type="text"
              placeholder="Enter Crime ID"
              value={crimeID}
              onChange={(e) => setCrimeID(e.target.value)}
              onKeyPress={handleEnterKey} 
            />
            <label>Description:</label>
            <input
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onKeyPress={handleEnterKey} 
            />
            
          </div>
        </div>
      )}

     
      <table className='data-table1 '>
        <thead>
          <tr>
            <th></th>
            <th>Crime ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => (
            <tr
            
            key={item.id}
              className={selectedRows.includes(item.id) ? 'selected' : ''}
              onClick={() => toggleRowSelection(item.id)}
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => toggleRowSelection(item.id)}
                />
              </td>
              <td>{item.crimeID}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

  

      <div className='fbtn'><button onClick={handleRegistration} className="btn">
          Update
        </button>
    </div>
   </div>
  );
};

export default UpdateCriminalSuspect;

