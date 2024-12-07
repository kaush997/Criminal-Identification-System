import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import UpdateEvidence from '../Components/UpdateEvidence/UpdateEvidence';



export default function FullUpdateEvidence() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <UpdateEvidence/>
      </div>
  
    </div>
  );
}
