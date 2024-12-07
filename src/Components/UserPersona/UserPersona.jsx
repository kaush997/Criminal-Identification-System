import React from 'react';
import { FaFacebook, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './UserPersona.css';

const UserPersonaPage = () => {
  return (
    <div className="persona-container">
      <div className="picture-section">
      
        <img src="./assets/images/officer2.jpg" alt="User" />
        
      </div>
      <div className="details-section">
        <h2>Jeo John</h2>
        <div className="info-box" >
          <FaEnvelope className="icon" />
          <div className="info">
            <p className="info" >user@example.com</p>
          </div>
        </div>
        <div className="info-box">
          <FaLinkedin className="icon" />
          <div className="info">
            <p>LinkedIn Profile</p>
          </div>
        </div>
        <div className="info-box">
          <FaFacebook className="icon" />
          <div className="info">
            <p>Facebook Profile</p>
          </div>
        </div>
        <div className="bio">
          <h4>Bio</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
        </div>
        <div className="bio">
          <h4>Service</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
        </div>
        
        
        <div className="social-icons">
          <a href="https://www.facebook.com/user-profile">
            <FaFacebook className="social-icon" />
          </a>
          <a href="mailto:user@example.com">
            <FaEnvelope className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/user-profile">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
      <div className="third-section width=20px">
        
        <div className="navy-blue-part  "></div>
        
      </div>
    </div>
  );
};

export default UserPersonaPage;

