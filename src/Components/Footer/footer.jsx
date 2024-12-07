import React from 'react';
import './footer.css';
import { useLocation } from 'react-router-dom';


const Footer = () => {
 
  const openSocialLink = (url) => {
    window.open(url, '_blank'); 
  };


  const location = useLocation();
  const hideNavBarOnPaths = [
 
    '/LoginGeneralFull',
    '/FogotPasswordFull',
    '/ResetPasswordFull',
    '/VerificationCodeFull',
    
    // Add more paths as needed
  ];

  // Check if the current path is in the list of paths to hide the navigation bar
  const shouldHideFooter = hideNavBarOnPaths.includes(location.pathname);

  if (shouldHideFooter) {
    return null; // Return null to hide the navigation bar
  }


  return (
    <footer className="footer-ft ">
      <div className="column-ft">
      <div className="icon-ft">
          <img src='assets\images\finger-print.png' alt='finger-print' className='logo1-ft' />
        
        <div className="text01-ft">CIS</div></div>
        <div className="two-line-text-ft">
          <div className="text02-ft">Criminal Identification System</div>
          <div className="text02-ft">Sri Lanka Police</div>
        </div>
        <div className="text03-ft">2023@cis.police.lk All rights reserved.</div>
        
        </div>

      <div className="column-ft">
        <div className="title-ft">Quick Links</div>
        <div className="link-ft">Home Page</div>
        <div className="link-ft">About Us Page</div>
        <div className="link-ft">News & Updates</div>
        <div className="link-ft">FAQ and Help</div>
        <div className="link-ft">Legal and Privacy</div>
      </div>
      <div className="column-ft">
        <div className="title-ft">Contact Us</div>
        <div className="text-ft"> Email</div>
        <div className="subpart-ft">cis@slpolice.lk</div>
        <div className="text-ft"> Phone Number</div>
        <div className="subpart-ft">0711234567</div>
      </div>
      <div className="column-ft">
        <div className="title-ft">Social Media</div>

        <div className="social-links-ft">
          {/* Facebook */}
          <div className="social-link-ft" onClick={() => openSocialLink('https://www.facebook.com/sl_policemedia')}>
            <img src='assets\images\facebook.png' alt='Facebook' className='social-img-ft' />
            <span className="social-link-text-ft">Facebook</span>
          </div>

          {/* Instagram */}
          <div className="social-link-ft" onClick={() => openSocialLink('https://www.instagram.com/sl_policemedia')}>
            <img src='assets\images\instagram.png' alt='Instagram' className='social-img-ft' />
            <span className="social-link-text-ft">Instagram</span>
          </div>

          {/* TikTok */}
          <div className="social-link-ft" onClick={() => openSocialLink('https://www.tiktok.com/sl_policemedia')}>
            <img src='assets\images\tiktok.png' alt='TikTok' className='social-img-ft' />
            <span className="social-link-text-ft">TikTok</span>
          </div>

          {/* Twitter */}
          <div className="social-link-ft" onClick={() => openSocialLink('https://www.twitter.com/sl_policemedia')}>
            <img src='assets\images\twitter.png' alt='Twitter' className='social-img-ft' />
            <span className="social-link-text-ft">Twitter</span>
          </div>

          {/* YouTube */}
          <div className="social-link-ft" onClick={() => openSocialLink('https://www.youtube.com/sl_policemedia')}>
            <img src='assets\images\youtube.png' alt='YouTube' className='social-img-ft' />
            <span className="social-link-text-ft">YouTube</span>
          </div>
        </div>
      </div>
  
    </footer>
  );
};
export default Footer;