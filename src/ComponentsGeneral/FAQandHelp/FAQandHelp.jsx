import React from 'react';
import './FAQandHelp.css';
import Accordion from './AccordionGeneral';
import OtherQuestions from './OtherQuestions';

function FAQandHelp() {
  return (
    <div className='FAQandHelp-container'>
        <div className='FAQ-topic-container'>
        <h1 className='Maintopic-general-PO'>FREQUENTLY ASKED QUESTIONS (FAQ)</h1>
        <div className='topic-line'></div>
        </div>
        <div className='Frequent-question'>
        <p style={{marginBottom: '40px'}}>How can we help you?</p>
        <Accordion/>
        </div>
        <div className='FAQ-topic-container'>
        <h1 className='Maintopic-general-PO'>ANY OTHER QUESTIONS</h1>
        <div className='topic-line'></div>
        </div>
        <OtherQuestions/>
        <p style={{fontFamily: 'Arial, Helvetica, sans-serif',marginLeft: '620px',marginBottom: '80px', fontStyle: 'normal', fontSize: '16px', color: '#000000'}}>Response will send to your respective email</p>
    </div>
  );
};


export default FAQandHelp;
