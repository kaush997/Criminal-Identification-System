import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import UpdateCriminalSuspect from '../Components/UpdateCriminalSuspect/UpdateCriminalSuspect';



export default function UpdateCriminalSuspectFull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <UpdateCriminalSuspect/>
      </div>
      
    </div>
  );
}

  