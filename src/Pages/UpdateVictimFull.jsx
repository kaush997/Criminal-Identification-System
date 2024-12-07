import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import UpdateVictim from '../Components/UpdateVictim/UpdateVictim';


export default function UpdateVictimfull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <UpdateVictim/>
      </div>
     
    </div>
  );
}
