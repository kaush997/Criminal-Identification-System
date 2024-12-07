import React from 'react';
import '../Styles.css';
import Name from '../ComponentsPO/Name';
import SubNavigationbar from '../ComponentsPO/SubNavigationbar';
import Sidebar from '../ComponentsPO/Sidebar';
import TableVictims from '../ComponentsPO/TableVictims';
import NavigationBarPO from '../ComponentsPO/NavigationbarPO';


function Victims() {
  return (
    <div>
        <nav>
        <NavigationBarPO/>
      </nav>
    <div className='Victims-container'>
       <div className='namecrime'><Name/></div> 
       <div ><SubNavigationbar/></div>
       <div className='sidebar-police-crime'><Sidebar/></div> 
       <div className='tv'><TableVictims/></div>
      </div>
      </div>
  );

};

export default Victims;