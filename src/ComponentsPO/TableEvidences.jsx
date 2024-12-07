import React from 'react';
import '../Components.css';

function TableEvidences() {
  return (
    <div className='registration-container-Crime-police'>
    <div className="registration-form-police">
    <div className="input-container-police">
      <label htmlFor="crimeID" className='p1-police'>Crime ID</label>
      <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
    </div>

    <div className="input-container-police">
      <label htmlFor="crimeID" className='p1-police'>Evidence ID</label>
      <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
    </div>

    <div className="input-container-police">
      <label htmlFor="area" className='p1-police'>Testimonial(optional)</label>
      <div style={{width:'530px', minHeight:'40px', backgroundColor:'#e0e1fc'}}></div>
    </div>

  <div className="input-container-police">
  <label htmlFor="victimPhotos" className="p1-police">
    Photos of the crime
  </label>
</div>
</div>
</div>
  );
};

export default TableEvidences;