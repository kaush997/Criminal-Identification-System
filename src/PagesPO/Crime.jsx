import React from 'react';
import '../Styles.css';
import Name from '../ComponentsPO/Name';
import SubNavigationbar from '../ComponentsPO/SubNavigationbar';
import Sidebar from '../ComponentsPO/Sidebar';
import TableCrime from '../ComponentsPO/TableCrime';
import NavigationBarPO from '../ComponentsPO/NavigationbarPO';

function Crime() {
  return (
    <div>
    <nav>
        <NavigationBarPO/>
      </nav>
    <div className='crimecontainer'>
      <div className='namecrime'><Name/></div> 
      <SubNavigationbar/>
       <div className='sidebar-police-crime'><Sidebar/></div> 
        <div className='tablecrime'><TableCrime/></div>
      </div>
      </div>
  );

};

export default Crime;