import React from 'react';
import "../styles/Contactos.css";
import WhatsApp from '../assets/WhatsApp.png';
import Instagram from '../assets/Instagram.png';
import TwitterX from '../assets/TwitterX.png';
import TikTok from '../assets/TikTok.webp';

function Contactos() {
  return (
    <div className='contactos'>
      <div className="backgroundOverlay"></div>
      <div className="headerContainer">
        <h1>Contactos</h1>
        <h2 className="email">mais55lab@gmail.com</h2>
        <h1>Siga a +55 lab</h1>
        <div className="iconLinks">
          <a href="https://www.instagram.com/mais55.lab/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contactos;
