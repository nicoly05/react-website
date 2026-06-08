import React from 'react';
import "../styles/Contactos.css";
import WhatsApp from '../assets/WhatsApp.png';
import Instagram from '../assets/Instagram.png';
import Mail from '../assets/Mail.png';

function Contactos() {
  return (
    <div className='contactos'>
      <div className="backgroundOverlay"></div>

      <div className="headerContainer">
        <h1>Contactos</h1>

        {/* 3 LINHAS PEDIDAS */}
        <div className="contact-info">
          {/* Linha 1 — Email */}
            <p className="mail">
               <a 
              href="mailto:mais55lab@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mail-link"
            >
              <img src={Mail} alt="Mail" className="icon" />
            </a>
              mais55lab@gmail.com
            
          </p>

          {/* Linha 2 — Telefone + WhatsApp */}
          <p className="telefone">
            <a 
              href="https://wa.me/351912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <img src={WhatsApp} alt="WhatsApp" className="icon" />
            </a>
            +351 912 345 678
          </p>

          {/* Linha 3 — Instagram */}
          <p className="instagram">
            <a 
              href="https://www.instagram.com/mais55.lab/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <img src={Instagram} alt="Instagram" className="icon" />
            </a>
            @mais55.lab
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contactos;
