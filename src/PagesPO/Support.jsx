import React from 'react';
import '../Styles.css';
import NavigationBarPO from '../ComponentsPO/NavigationbarPO';



function Home() {
  return (
    <div>
        <nav>
        <NavigationBarPO/>
      </nav>
    <div className="Support-container">
        <div>
          <h1>Support page</h1>
        </div>
    </div>
    </div>
  );
}

export default Home;
