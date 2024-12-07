import React from 'react';
import '../Styles.css';
import Name from '../ComponentsPO/Name';
import SubNavigationbar from '../ComponentsPO/SubNavigationbar';
import Sidebar from '../ComponentsPO/Sidebar';
import TableEvidences from '../ComponentsPO/TableEvidences';
import NavigationBarPO from '../ComponentsPO/NavigationbarPO';

function Evidences() {
  return (
    <div style={{minHeight:'800px'}}>
    <nav>
    <NavigationBarPO/>
  </nav>
    <div className='Evidences-container'>
       <div className='namecrime'><Name/></div> 
       <div ><SubNavigationbar/></div>
       <div className='sidebar-police-crime'><Sidebar/></div> 
       <div className='te'><TableEvidences/></div>
      </div>
      </div>
  );

};

export default Evidences;