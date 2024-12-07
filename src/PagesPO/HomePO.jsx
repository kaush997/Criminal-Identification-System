import React from 'react';
import '../Styles.css';
import imageSrc from '../Assets/welcome_img.png';
import NavigationBarPO from '../ComponentsPO/NavigationbarPO';


function HomePO() {
  const containerStyle = {
    backgroundImage: `url(${imageSrc})`,  
    backgroundSize: 'cover',
    backgroundPosition: 'center',        
    backgroundRepeat: 'no-repeat',      
    height: '100vh',                      
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',  
    
  };
  return (
    
      <div>
        <nav>
        <NavigationBarPO/>
      </nav>
    <div style={containerStyle} className="home-container">
      <div className='welcome-heading'>
      <h1>Welcome</h1>
      </div>
      <div className="sub-heading1">
        To Criminal Identification System
      </div>
      <div className='sub-heading2'>
        Sri Lanka Police
      </div>
    </div>
    </div>
  );
}

export default HomePO;
