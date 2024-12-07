import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import UpdateExistingCriminalSuspect from '../Components/UpdateExistingCriminalSuspect/UpdateExistingCriminalSuspect';



export default function UpdateExistingFull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <UpdateExistingCriminalSuspect/>
      </div>
  
    </div>
  );
}

  