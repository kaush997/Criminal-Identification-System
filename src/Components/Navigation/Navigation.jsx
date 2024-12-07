import React from 'react';
import './Navigation.css'; 
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="assets\images\finger-print.png" alt="Icon" className="navbar-icon" style={{ marginLeft: '20px' }} />
        <span className="navbar-title"><h2>CIS</h2></span>
      </div>
      <div className="navbar-center mt-2" >
        <ul className="navbar-links">
          <li><NavLink className="nav-link" to="/Registercrimefull">New registration</NavLink></li>
          <li><NavLink className="nav-link" to="/UpdateCrimeFull">Crimes</NavLink></li>
          <li><NavLink className="nav-link" to="/UpdateCriminalSuspectFull">Criminals</NavLink></li>
          <li><NavLink className="nav-link" to="/UpdateVictimfull">Victims</NavLink></li>
          <li><NavLink className="nav-link" to="/FullUpdateEvidence">Evidences</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right" style={{ marginRight: '20px' }}>
        <button className="user-button" >
          <span className="username">Gayathri rasangika</span>
          <div className="profile-picture-frame">
            <img src="assets/images/man.png" alt="Profile" className="profile-picture" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
