import React from 'react';
import '../Styles.css';
import pdfimage from '../Assets/pdfimage.svg';
import ReportBox from '../ComponentsPO/ReportBox';
import DownloadButton from '../ComponentsPO/DownloadButton';
import NavigationBarPO from '../ComponentsPO/NavigationbarPO';


function ReportResponse() {

  return (
    <div>
        <nav>
        <NavigationBarPO/>
      </nav>
    <div className="ReportResponse-container">
    <div className='Reportbox-container'>
      <ReportBox/>
    </div>
    <div className="image-pdf">
        <img src={pdfimage} alt="SearchImage" className="imagepdf" />
      </div>
    <div className='DownloadButton-response'>
      <DownloadButton/>
    </div>
    </div>
    </div>
    
  );
}

export default ReportResponse;