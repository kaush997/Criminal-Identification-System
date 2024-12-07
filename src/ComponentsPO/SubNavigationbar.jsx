import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Components.css';


const SubNavigationbar = () => {
  return (
    <nav>
      <div style={{marginLeft:'200px', marginTop:'30px'}} >
        <ul className="navbar-links-sabnav">
          <li ><NavLink to="/SearchResult"><button className='sabnav-hov' style={{width:'250px', height:'30px', backgroundColor:'#000066'}}><p style={{color:'white', fontWeight:'bold'}}>Criminal</p></button></NavLink></li>
          <li ><NavLink to="/Crime"><button className='sabnav-hov' style={{width:'250px', height:'30px', backgroundColor:'#000066'}}><p style={{color:'white', fontWeight:'bold'}}>Crime</p></button></NavLink></li>
          <li ><NavLink to="/Victims"><button className='sabnav-hov' style={{width:'250px', height:'30px', backgroundColor:'#000066'}}><p style={{color:'white', fontWeight:'bold'}}>Victims</p></button></NavLink></li>
          <li ><NavLink to="/Evidences"><button className='sabnav-hov' style={{width:'250px', height:'30px', backgroundColor:'#000066'}}><p style={{color:'white', fontWeight:'bold'}}>Evidences</p></button></NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default SubNavigationbar;
