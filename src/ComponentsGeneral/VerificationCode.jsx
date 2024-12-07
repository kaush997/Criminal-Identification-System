import { useState, useRef } from 'react';
import '../ComponentsGeneral.css';

function VerificationCode() {
  const [inputCode, setInputCode] = useState([null, null, null, null]);
  const [error, setError] = useState(false);
  

  const input_0 = useRef(null);
  const input_1 = useRef(null);
  const input_2 = useRef(null);
  const input_3 = useRef(null);
  const buttonRef = useRef(null);

  const handleCodeChange = (e) => {
    setError(false);

    const charIndex = parseInt(e.target.name);

    const tempInputCode = inputCode;
    tempInputCode[charIndex] = e.target.value;
    setInputCode(tempInputCode);

    switch(charIndex) {
      case 0:
        input_1.current.focus();
        break;
      case 1:
        input_2.current.focus();
        break;
      case 2:
        input_3.current.focus();
        break;
      case 3:
      default:
        buttonRef.current.focus();
        break;
    }
  };

  const handleProceedButton = () => {
    const parsedCode = inputCode.reduce((code, current) => code + current);
    if (parsedCode === "0000") {
      setError(true);
    }
  };

  return (
    <div className="container p-3 component-container-general-30p">
      <div>  <p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', fontSize: '45px', textAlign: 'center', marginTop: '-70px', color:'#000066',}}>Criminal Identification System</p>
           <p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', fontSize: '45px', textAlign: 'center', marginBottom: '70px', color:'#000066'}}>Sri Lanka Police</p></div>
      <div className="row my-4">
        <div className="col">
          <p className="fs-2" style={{marginLeft:'435px'}}>Enter 4 Digit Code</p>
        </div>
      </div>
      {error &&
        <div className="row">
          <div className="col">
            <p className="text-error-color" style={{marginLeft:'440px'}}>
              Invalid code. Try again!
            </p>
          </div>
        </div>
      }
      <div className="row my-4 justify-content-center">
        <div className="col-1 centered-col">
          <input
            autoFocus
            type="text"
            maxlength="1"
            className="code-input"
            value={inputCode[0]}
            onChange={handleCodeChange}
            name="0"
            ref={input_0}
          />
        </div>
        <div className="col-1 centered-col">
          <input
            type="text"
            maxlength="1"
            className="code-input"
            value={inputCode[1]}
            onChange={handleCodeChange}
            name="1"
            ref={input_1}
          />
        </div>
        <div className="col-1 centered-col">
          <input
            type="text"
            maxlength="1"
            className="code-input"
            value={inputCode[2]}
            onChange={handleCodeChange}
            name="2"
            ref={input_2}
          />
        </div>
        <div className="col-1 centered-col">
          <input
            type="text"
            maxlength="1"
            className="code-input"
            value={inputCode[3]}
            onChange={handleCodeChange}
            name="3"
            ref={input_3}
          />
        </div>
      </div>
      {error ? (
        <div className="row my-4 justify-content-center">
          <div className="col centered-col">
            <button className="form-button-outline" style={{marginLeft:'590px'}}>
              Resend code
            </button>
          </div>
        </div>
      ) : (
        <div className="row my-5">
          <div className="col">
           <a href='/ResetPasswordFull'> <button
              className="form-button"
              style={{width:'350px', marginLeft:'465px'}}
              ref={buttonRef}
              onClick={handleProceedButton}
            >
              Proceed
            </button></a>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerificationCode;