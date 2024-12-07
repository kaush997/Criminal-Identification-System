import React from 'react';
import '../Components.css'; 

const Circle = ({ profilePhotoUrl }) => {
  return (
    <div className="circle">
      {profilePhotoUrl ? (
        <img className='profile-userside' src={profilePhotoUrl} alt="Profile" />
      ) : (
        <p className='no-photo-police'></p>
      )}
    </div>
  );
};

export default Circle;
