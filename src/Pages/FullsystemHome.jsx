import React from 'react';
import Navigation3 from '../Components/Navigation3/Navigation3';
import SystemHome from '../Components/SystemHome/SystemHome';
import Footer from '../Components/Footer/footer';


export default function FullsystemHome() {
  return (
    <div >
      <Navigation3/>
      <div>
        <SystemHome/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}