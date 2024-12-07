import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import RegisterCrime from '../Components/RegisterCrime/RegisterCrime'; 




export default function Registercrimefull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <RegisterCrime/>
      </div>

    </div>
  );
}

  