import React from 'react';
import './Navigation3.css'; 
import { NavLink } from 'react-router-dom';


const Navigation3 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="assets\images\finger-print.png" alt="Icon" className="navbar-icon" style={{ marginLeft: '20px' }} />
        <span className="navbar-title"><h2>CIS</h2></span>
      </div>
      <div className="navbar-center mt-2">
        <ul className="navbar-links ">
        <li><NavLink to="/FullsystemHome">Home</NavLink></li>
          <li><NavLink to="">About Us</NavLink></li>
          <li><NavLink to="/ContactUSFull">Contact Us</NavLink></li>
          <li><NavLink to="/NewsandUpdatesFull">News & Updates</NavLink></li>
          <li><NavLink to="/FAQandHelpFull">FAQ & Help</NavLink></li>
          <li><NavLink to="">Legal & Privacy</NavLink></li>
         
        </ul>
      </div>
      <div className="navbar-right" style={{ marginRight: '20px' }}>
  <button className="user-button" >
    <span className="username"> <div className="navbar-links-signin "><NavLink to="/LoginGeneralFull">Sign In</NavLink></div></span>
    <div className="profile-picture-frame">
      <img src="assets/images/SignIn.png" alt="Profile" className="profile-picture" />
    </div>
  </button>
</div>
     
      
    </nav>
  );
};

export default Navigation3;