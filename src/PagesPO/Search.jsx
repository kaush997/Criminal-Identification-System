import React from 'react';
import '../Styles.css';
import imageSrc from '../Assets/image1.png';
import Investigation from '../ComponentsPO/Investigation';
import OptionsPO from '../ComponentsPO/OptionsPO';
import SearchTypeBox from '../ComponentsPO/SearchTypeBox';
import SearchButton from '../ComponentsPO/SearchButton';
import NavigationBarPO from '../ComponentsPO/NavigationbarPO';


function Search() {

  return (
    
    <div>
    <nav>
    <NavigationBarPO/>
  </nav>
    <div className="Search-container">
   <img src={imageSrc} alt="Face" className="FaceRecognition-image" />
   <div className='Search-content'>
    <div className='Search-investigation'>
    <Investigation/>
    </div>
    <div className='Search-options1'>
    <OptionsPO/>
    </div>
    <div className='Search-searchtypebox'>
    <SearchTypeBox/>
    </div>
    <div className='Search-searchbutton'>
    <SearchButton/>
    </div>
   </div>
    </div>
    </div>
  );
}

export default Search;
