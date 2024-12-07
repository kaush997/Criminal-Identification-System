import React from 'react';
import '../Styles.css';
import Circle from '../ComponentsPO/CriminalPhoto';
import Name from '../ComponentsPO/Name';
import Rectangle from '../ComponentsPO/Rectangle';
import Sidebar from '../ComponentsPO/Sidebar';
import CriminalPolice from '../ComponentsPO/CriminalPolice';
import NavigationBarPO from '../ComponentsPO/NavigationbarPO';

function SearchResult() {
  return (
    <div>
    <nav>
    <NavigationBarPO/>
  </nav>
    <div className='Searchresult-container'>
      <div style={{marginLeft:'-5px'}}><Circle/></div> 
       <div><Rectangle/></div>
       <div className='sr'>
       <Name/>
       <Sidebar/>
       <CriminalPolice/>
       </div>
      </div>
      </div>
  );

};

export default SearchResult;