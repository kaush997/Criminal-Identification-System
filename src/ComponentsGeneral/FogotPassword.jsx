import { useState } from 'react';
import '../ComponentsGeneral.css';




function ForgotPassword() {
  const [deliveryMethod, setDeliveryMethod] = useState('email');
  const [deliveryData, setDeliveryData] = useState('');
  const [continueClicked, setContinueClicked] = useState(false);
  const [error, setError] = useState(null);

  const handleContinue = () => {
    if (deliveryMethod === 'email' && deliveryData === '') {
      setError('Invalid email');
    } else {
      setError(null);
      setContinueClicked(true);
    }
  };

  const handleDropdownChange = (e) => {
    setError(null);
    setDeliveryMethod(e.target.value);
  };

  const handleInput = (e) => {
    setError(null);
    setDeliveryData(e.target.value);
  };

  return (
    
    <div className="container p-3 component-container-30p">
      <div>  <p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', fontSize: '45px', textAlign: 'center', marginTop: '-70px', color:'#000066',}}>Criminal Identification System</p>
           <p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', fontSize: '45px', textAlign: 'center', marginBottom: '70px', color:'#000066'}}>Sri Lanka Police</p></div>
      <div style={{marginLeft:'370px'}}>
      <div className="row">
        <div className="col">
          <p className="fs-2" >Forgot Password</p>
        </div>
      </div>
      <div className="row">
        <div className="col forgot-input-col">
          <p>We will send a 4 digit code to the email</p>
        </div>
      </div>
      <div className="row my-3" >
        <div className="col">

          <select
            onChange={handleDropdownChange}
            value={deliveryMethod}
            className="form-input forgot-form-dropdown"
            style={{width:'230px', marginLeft:'0px'}}
          >
            <option value="email">Email</option>
           {/*<option value="mobile">Mobile</option>*/}
          </select>
        </div>
        <div className="col" >
          <input
            type="text"
            value={deliveryData}
            onChange={handleInput}
            className="form-input"
            style={{marginLeft:'-150px'}}
          />
        </div>
      </div>
      {error && <div className="row my-3">
        <p className="text-error-color">{error}</p>
      </div>
      }
      <div className="row my-4">
        <div className="col">
          <button className="form-button" style={{marginLeft:'95px'}} onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
      {continueClicked && (
        <>
          <div className="row">
            <div className="col text-center text-accent-color " style={{marginLeft:'-180px'}} >
              <p>Code has been sent to the mentioned email</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col centered-col" style={{marginLeft:'225px'}}>
            <a href='/VerificationCodeFull'> <button className="form-button-outline">Enter Code</button></a>
            </div>
          </div>
        </>
      )}
      </div>
    </div>
  );
}

export default ForgotPassword;