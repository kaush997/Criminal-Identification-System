import React, { useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import './SystemHome.css';

export default function SystemHome() {
  const sliderImages = [
    {
      url:
        'https://www.army.lk/sites/default/files/field/image/20190925_police_18.jpg',
    },
    {
      url:
        'https://i.aaj.tv/primary/2022/05/05202336846b68b.jpg',
    },
    {
      url:
        'https://www.sundaytimes.lk/201115/uploads/101.jpg',
    },
    {
      url:
        'https://static.dw.com/image/62534074_905.jpg',
    },
    {
      url:
        'https://www.hrw.org/sites/default/files/styles/opengraph/public/multimedia_images_2015/srilanka1015_reportcovermain.jpg?itok=BFx3Mkyi',
    },
  ];

  return (
    <div className="system-home">
      <div className="photo-box">
        <SimpleImageSlider
          width={'90%'}
          height={500}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={3}
          align-items={'center'}
        />
      </div>
      <h2 className='title'>Welcome to the Criminal Identification System</h2>
      <div className='section'>
        <div className='col-6 col-xs-12 paras'>
          <p>A Sri Lankan criminal identification page refers to an official online platform or webpage maintained by the law enforcement or government authorities in Sri Lanka. This webpage serves as a centralized and digital repository for criminal identification and related information. It typically includes databases of individuals with criminal records, fingerprints, photographs, and other biometric data, allowing authorized users, such as law enforcement agencies, to efficiently access and verify the identities of individuals involved in criminal investigations, legal proceedings, or background checks. The Sri Lankan criminal identification page plays a crucial role in maintaining public safety, aiding law enforcement efforts, and ensuring the integrity of the criminal justice system in Sri Lanka.</p>
          <div className="desc-buttons">
            <button className="learn-more-button">
              Learn more
            </button>
          </div>
        </div>
        <div className='col-6 col-xs-12'>
          <img src="./assets/images/FaceGlitch.gif" alt="" srcset="" className='show'/>
        </div>
      </div>
      <h2 className='title'>Our Department</h2>
      <hr className="styled-line"></hr>
      <div className='section'>
        <div className=''>
          <img src="./assets/images/officer2.jpg" alt="" srcset="" className='show1'/>
        </div>
        <div className='pol1'>
          <h6>"We must build bridges of trust between law enforcement and the public to create a safer society."</h6>
          <p className='po1'>
            <i>John Anderson</i>
            <br />
            <i>Cheif Police Officer</i>
          </p>
        </div>
      </div> 

      <div className='section2'>
        <div className='pol2'>
          <h6>"In the pursuit of justice, we navigate the darkest corners of society."</h6>
          <p className='po2'>
            <i>Jude Robinson</i>
            <br />
            <i>Cheif Criminal Office</i>
          </p>
        </div>
        <div className=''>
          <img src="./assets/images/officer1.jpg" alt="" srcset="" className='show1'/>
        </div>
      </div> 

      <div className="stations">
        <div className="stat">
          <img src="./assets/images/station1.jpg" alt="police-station" />
          <p className='dep'>Police Office</p>
        </div>
        <div className="stat">
          <img src="./assets/images/station2.jpg" alt="criminal-department" />
          <p className='dep'>Criminal Department</p>
        </div>
        <div className="stat">
          <img src="./assets/images/station3.jpg" alt="IT-department" />
          <p className='dep'>IT Department</p>
        </div>
      </div>

      <div className="see-buttons">
        <button className="learn-more-button">
          See more
        </button>
      </div>

      <h2 className='title'>Our Statistics Overview</h2>
      <hr className="styled-line"></hr>
      <div className='details'>       
        <div className="navy-box">
          <h1>1.5K</h1><br/><h3>Police Stations</h3><br/><p><i>Present</i></p>
        </div>
        <div className="navy-box">
          <h1>500</h1><br/><h3>Police Station branches</h3><br/><p><i>Present</i></p>
        </div>
        <div className="navy-box">
          <h1>15K</h1><br/><h3>Police Officers</h3><br/><p><i>Present</i></p>
        </div>
      </div>
      <div className='details'>       
        <div className="navy-box">
          <h1>1.5K</h1><br/><h3>Recorded Crimes</h3><br/><p><i>Per Year</i></p>
        </div>
        <div className="navy-box">
          <h1>1.5K</h1><br/><h3>Arrested Criminals</h3><br/><p><i>Per Year</i></p>
        </div>
        <div className="navy-box">
          <h1>1.5K</h1><br/><h3>Affected Victims</h3><br/><p><i>Per Year</i></p>
        </div>
      </div>
      <br/><br/>

      <h2 className='title'>Our Services</h2>
      <hr className="styled-line"></hr>
      <div className='finalsub'>
        <div className='imgIcon'>
          <img src="./assets/images/criminal.png" alt="criminal" className="icon-image" />
        </div>
        <div className='desc2'><h5>Criminal & Crime Data Management</h5></div>
        <div className='moredetails'>
          <button className="learn-more-button">
            More Details
          </button>
        </div>
      </div>

      <div className='finalsub'>
        <div className='imgIcon'>
          <img src="./assets/images/face-recognition.png" alt="criminal" className="icon-image" />
        </div>
        <div className='desc2'><h5>Face Recognition Technology</h5></div>
        <div className='moredetails'>
          <button className="learn-more-button">
            More Details
          </button>
        </div>
      </div>
      <div className='finalsub'>
        <div className='imgIcon'>
          <img src="./assets/images/smartphone.png" alt="criminal" className="icon-image" />
        </div>
        <div className='desc2'><h5>Location Tracking</h5></div>
        <div className='moredetails'>
          <button className="learn-more-button">
            More Details
          </button>
        </div>
      </div>
      <br/><br/>
    </div>
  );
}
