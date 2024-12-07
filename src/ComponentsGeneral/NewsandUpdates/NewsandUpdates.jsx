import './NewsandUpdates.css';
import React, { useState } from 'react';

function NewsandUpdates() {


    const [secondContainerExpanded1, setSecondContainerExpanded1] = useState(false);  
    const [secondContainerExpanded2, setSecondContainerExpanded2] = useState(false);
    const [secondContainerExpanded3, setSecondContainerExpanded3] = useState(false);
    const [secondContainerExpanded4, setSecondContainerExpanded4] = useState(false);

    const [secondContainerExpanded5, setSecondContainerExpanded5] = useState(false);
    const [secondContainerExpanded6, setSecondContainerExpanded6] = useState(false);

    const [secondContainerExpanded7, setSecondContainerExpanded7] = useState(false);
    const [secondContainerExpanded8, setSecondContainerExpanded8] = useState(false);
    const [secondContainerExpanded9, setSecondContainerExpanded9] = useState(false);



    const textsac1 = 'Details about the operation and the identities of the arrested individuals have not been disclosed at this time. The Kandy Police Department is expected to release an official statement regarding the arrests and the specific charges filed against the suspects in due course.';
    const textsac2 = 'Details about the operation and the identities of the arrested individuals have not been disclosed at this time. The Kandy Police Department is expected to release an official statement regarding the arrests and the specific charges filed against the suspects in due course.';
    const textsac3 = 'Details about the operation and the identities of the arrested individuals have not been disclosed at this time. The Kandy Police Department is expected to release an official statement regarding the arrests and the specific charges filed against the suspects in due course.';
    const textsac4 = 'Details about the operation and the identities of the arrested individuals have not been disclosed at this time. The Kandy Police Department is expected to release an official statement regarding the arrests and the specific charges filed against the suspects in due course.';

    const textsac5 = 'In a stunning development, the Criminal Investigation Department (CID) announced a major breakthrough in an unsolved high-profile cold case that has baffled authorities for years.';
    const textsac6 = 'In a historic move, the Parliament today unanimously passed the comprehensive "Education for All Act," signaling a significant milestone in the country\'s commitment to providing quality education for all citizens.';

    const textsac7 = 'Interviews for the police officer position at kandy';
    const textsac8 = 'Interviews for the police officer position at kandy';
    const textsac9 = 'Interviews for the police officer position at kandy';


  const toggleSecondContainer1 = () => {
    setSecondContainerExpanded1(!secondContainerExpanded1);
};

const toggleSecondContainer2 = () => {
  setSecondContainerExpanded2(!secondContainerExpanded2);
};

const toggleSecondContainer3 = () => {
  setSecondContainerExpanded3(!secondContainerExpanded3);
};

const toggleSecondContainer4 = () => {
  setSecondContainerExpanded4(!secondContainerExpanded4);
};

const toggleSecondContainer5 = () => {
  setSecondContainerExpanded5(!secondContainerExpanded5);
};

const toggleSecondContainer6 = () => {
  setSecondContainerExpanded6(!secondContainerExpanded6);
};

const toggleSecondContainer7 = () => {
  setSecondContainerExpanded7(!secondContainerExpanded7);
};

const toggleSecondContainer8 = () => {
  setSecondContainerExpanded8(!secondContainerExpanded8);
};

const toggleSecondContainer9 = () => {
  setSecondContainerExpanded9(!secondContainerExpanded9);
};


  return (
    <div className='NewsandUpdates-container'>
        <div className='News-topic-container'>
        <h1 className='Maintopic-general-PO'>NEWS AND UPDATES</h1>
        <div className='topic-line'></div>
        </div>
        <div style={{marginLeft: '170px'}}>
        <h2 className='Maintopic-general-PO'>TOP STORIES</h2>
        </div>
       
        <div className='first-announce-container'>

        <div>
        <img src="assets/images/faconeimage.png" alt="fac" className="fac-image" />
        <div className='fac-readmore-one'>
        <p style={{fontSize: '26px', fontWeight: 'bolder', fontFamily: 'sans-serif', marginTop: '20px', textAlign: 'center'}}>CID Announces Breakthrough in High-Profile Cold Case Investigation </p>
        <div>{secondContainerExpanded5 ? (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '0px'}}>{textsac5}</p>
              <div style={{marginLeft: '120px'}}><button  onClick={toggleSecondContainer5} className='clickhere-tac'>Read Less</button></div>
           </div>
           ) : (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '0px'}}>{textsac5.slice(0, 90)}...</p>
             <div style={{marginLeft: '95px'}}><button onClick={toggleSecondContainer5} className='clickhere-tac'>Read More</button> </div>
           </div>
            )}</div>
        </div>
        </div>

        <div>
        <img src="assets/images/factwoimage.png" alt="fac" className="fac-image" />
        <div className='fac-readmore-one'>
        <p style={{fontSize: '26px', fontWeight: 'bolder', fontFamily: 'sans-serif', marginTop: '20px', textAlign: 'center'}}> Landmark Education Reform Bill Passes Unanimously in Parliament</p>
        <div>{secondContainerExpanded6 ? (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '0px'}}>{textsac6}</p>
              <div style={{marginLeft: '95px'}}><button onClick={toggleSecondContainer6} className='clickhere-tac'>Read Less</button></div>
           </div>
           ) : (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '0px'}}>{textsac6.slice(0, 90)}...</p>
              <div style={{marginLeft: '95px'}}><button onClick={toggleSecondContainer6} className='clickhere-tac'>Read More</button></div>
           </div>
            )}</div>
        </div>
        </div>

        </div>

        <div style={{marginLeft: '170px', marginTop: '50px'}}>
        <h2 className='Maintopic-general-PO'>OTHER STORIES</h2>
        </div>

        <div className='second-announce-container'>
            <div className='sac-readmore'>
            <div style={{width: '400px'}}><img style={{width: '400px'}} src="assets/images/sacimage.png" alt="sac" className="sac-image" /></div>
            <div style={{display: 'block'}}>
            <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', marginLeft: '40px', marginTop: '20px'}}>4 Person arrested in Kandy due to the drug dealing</p>
            
            <div>{secondContainerExpanded1 ? (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '40px'}}>{textsac1}</p>
            <button onClick={toggleSecondContainer1} className='clickhere-tac'>Read Less</button>
           </div>
           ) : (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '40px'}}>{textsac1.slice(0, 90)}...</p>
             <button onClick={toggleSecondContainer1} className='clickhere-tac'>Read More</button>
           </div>
            )}</div>
            </div>
            </div>

            <div className='sac-readmore'>
            <div style={{width: '400px'}}><img style={{width: '400px'}} src="assets/images/sacimage.png" alt="sac" className="sac-image" /></div>
            <div style={{display: 'block'}}>
            <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', marginLeft: '40px', marginTop: '20px'}}>4 Person arrested in Kandy due to the drug dealing</p>  
            
            <div>{secondContainerExpanded2 ? (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '40px'}}>{textsac2}</p>
             <button  onClick={toggleSecondContainer2} className='clickhere-tac'>Read Less</button>
           </div>
           ) : (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '40px'}}>{textsac2.slice(0, 90)}...</p>
             <button onClick={toggleSecondContainer2} className='clickhere-tac'>Read More</button>
           </div>
            )}</div>
            </div>
            </div>
            <div className='sac-readmore'>
            <div style={{width: '400px'}}><img style={{width: '400px'}} src="assets/images/sacimage.png" alt="sac" className="sac-image" /></div>
            <div style={{display: 'block'}}>
            <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', marginLeft: '40px', marginTop: '20px'}}>4 Person arrested in Kandy due to the drug dealing</p>
            
            <div>{secondContainerExpanded3 ? (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '40px'}}>{textsac3}</p>
             <button onClick={toggleSecondContainer3} className='clickhere-tac'>Read Less</button>
           </div>
           ) : (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '40px'}}>{textsac3.slice(0, 90)}...</p>
             <button onClick={toggleSecondContainer3} className='clickhere-tac'>Read More</button>
           </div>
            )}</div>
            </div>
            </div>
            <div className='sac-readmore'>
            <div style={{width: '400px'}}><img style={{width: '400px'}} src="assets/images/sacimage.png" alt="sac" className="sac-image" /></div>
            <div style={{display: 'block'}}>
            <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', marginLeft: '40px', marginTop: '20px'}}>4 Person arrested in Kandy due to the drug dealing</p>
            
            <div>{secondContainerExpanded4 ? (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '40px'}}>{textsac4}</p>
             <button onClick={toggleSecondContainer4} className='clickhere-tac'>Read Less</button>
           </div>
           ) : (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '40px'}}>{textsac4.slice(0, 90)}...</p>
             <button onClick={toggleSecondContainer4} className='clickhere-tac'>Read More</button>
           </div>
            )}</div>
            </div>
            </div>
        </div>

        <div style={{marginLeft: '170px', marginTop: '50px'}}>
        <h2 className='Maintopic-general-PO'>UPCOMING EVENTS</h2>
        </div>

        <div className='third-announce-container'>

        <div className='tac-clickhere'>
        <img src="assets/images/tacimage.png" alt="sac" className="tac-image" />
        <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', textAlign: 'center'}}>Interviews for the police officer position at kandy</p>
        <div >{secondContainerExpanded7 ? (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '30px', marginRight: '30px'}}>{textsac7}</p>
             <button onClick={toggleSecondContainer7} className='clickhere-tac'>Click Less</button>
           </div>
           ) : (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '30px', marginRight: '30px'}}>{textsac7.slice(0, 90)}...</p>
             <button onClick={toggleSecondContainer7} className='clickhere-tac'>Click Here</button>
           </div>
            )}</div>
        </div>
        <div className='tac-clickhere'>
        <img src="assets/images/tacimage.png" alt="sac" className="tac-image" />
        <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', textAlign: 'center'}}>Interviews for the police officer position at kandy</p>
        <div>{secondContainerExpanded8 ? (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '30px', marginRight: '30px'}}>{textsac8}</p>
             <button onClick={toggleSecondContainer8} className='clickhere-tac'>Click Less</button>
           </div>
           ) : (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '30px', marginRight: '30px'}}>{textsac8.slice(0, 90)}...</p>
             <button onClick={toggleSecondContainer8} className='clickhere-tac'>Click Here</button>
           </div>
            )}</div>
        </div>
        <div className='tac-clickhere'>
        <img src="assets/images/tacimage.png" alt="sac" className="tac-image" />
        <p style={{fontSize: '24px', fontWeight: 'medium', fontFamily: 'sans-serif', textAlign: 'center'}}>Interviews for the police officer position at kandy</p>
        <div>{secondContainerExpanded9 ? (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '30px', marginRight: '30px'}}>{textsac9}</p>
             <button onClick={toggleSecondContainer9} className='clickhere-tac'>Click Less</button>
           </div>
           ) : (
            <div>
              <p style={{fontSize: '18px', textAlign: 'justify', marginLeft: '30px', marginRight: '30px'}}>{textsac9.slice(0, 90)}...</p>
             <button onClick={toggleSecondContainer9} className='clickhere-tac'>Click Here</button>
           </div>
            )}</div>
        </div>
        </div>

    </div>
  );
};


export default NewsandUpdates;