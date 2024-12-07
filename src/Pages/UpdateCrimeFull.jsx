import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import UpdateCrime  from '../Components/UpdateCrime/UpdateCrime';




export default function UpdateCrimeFull() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation/>
      <div style={{ flex: 1 }}>
        <UpdateCrime/>
      </div>

    </div>
  );
}

  