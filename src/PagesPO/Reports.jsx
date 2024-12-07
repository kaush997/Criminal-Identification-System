import React from 'react';
import '../Styles.css';
import ReportBox from '../ComponentsPO/ReportBox';
import NavigationBarPO from '../ComponentsPO/NavigationbarPO';


function Reports(){
    return (
        <div>
        <nav>
        <NavigationBarPO/>
      </nav>
        <div className='Reports-container'>
            <ReportBox/>
        </div>
        </div>
    );
}

export default Reports;

