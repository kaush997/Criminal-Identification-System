import { useState } from 'react';
import '../StylesLogin.css';
import LogoGeneral from '../Assets/profile-user.png';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setError(false);
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSignIn = () => {
    if (username !== 'admin' || password !== 'admin') {
      setError(true);
    }
  };

  return (
    <div className="container p-3 component-container-20p">
      <div>  <p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', fontSize: '45px', textAlign: 'center', marginTop: '-70px', color:'#000066',}}>Criminal Identification System</p>
           <p style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', fontSize: '45px', textAlign: 'center', marginBottom: '70px', color:'#000066'}}>Sri Lanka Police</p></div>
           <div style={{marginTop: '-50px', marginBottom: '40px'}}><img style = {{width: '130px', marginLeft: '570px', }} src={LogoGeneral} alt="LogoG" /></div>
      <div style={{marginLeft:'150px'}}>
      {error && <div className="row my-2 text-center">
          <p className="text-error-color" style={{marginLeft:'-80px'}}>
            Invalid username or password
          </p>
        </div>
      }
      <div className="row my-2">
        <div className="col">
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            style={{width:'420px'}}
            name="username"
            value={username}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            style={{width:'420px'}}
            name="password"
            value={password}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <a href='/FogotPasswordFull'><button className='form-link-button' style={{marginLeft:'283px'}}>Forgot password</button></a>
        </div>
      </div>
      <div className="row my-3 align-items-center" style={{ marginLeft: '5px' }}>
        <div className="col">
          <input type="checkbox" className="me-2" style={{marginLeft:'-31px'}} />
          <div style={{marginLeft: '300px', marginTop: '-22px'}} >Remember me</div>
        </div>
        <div className="col" style={{marginLeft:'-130px'}}>
          <button className="form-button" style={{width:'180px'}} onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login;