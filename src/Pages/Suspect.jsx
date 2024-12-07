import React from 'react';
import Navigation2 from '../Components/Navigationbar2/Navigation2';
import RadioButttonfull from '../Components/RadioButttonfull/RadioButttonfull';



export default function Suspect() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation2/>
      <div style={{ flex: 1 }}>
        <RadioButttonfull/>
      </div>

    </div>
  );
}