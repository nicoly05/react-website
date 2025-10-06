import React from 'react';
import "../styles/Contactos.css";
import WhatsApp from '../assets/WhatsApp.png';
import Instagram from '../assets/Instagram.png';
import TwitterX from '../assets/TwitterX.png';
import TikTok from '../assets/TikTok.webp';

function Contactos() {
  return (
    <div className='contactos'>
      <div className="backgroundOverlay"></div> {/* <== Overlay com blur */}
      <div className="headerContainer">
        <h1>Contactos</h1>
        {/* <h2>+351 999 888 777</h2> */}
        <h2>mais55lab@gmail.com</h2>
        <h1>Siga a +55 lab</h1>
        <div className="iconLinks">
          {/* <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={WhatsApp} alt="WhatsApp" />
          </a> */}
          <a href="https://www.instagram.com/mais55.lab/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          {/* <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterX} alt="X" />
          </a> */}
           {/* <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={TikTok} alt="TikTok" />
          </a> */}
        </div>

      </div>
    </div>
  );
};

export default Contactos;
