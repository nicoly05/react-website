import React from 'react';
import "../styles/Contactos.css";
import WhatsApp from '../assets/Whatsapp.png';
import Instagram from '../assets/Instagram.png';
import Mail from '../assets/Mail.png';

function Contactos() {
  return (
    <div className='contactos'>
      <div className="backgroundOverlay"></div>

      
        <h1 style={{ color: '#e91e8c' }}>Contactos</h1>

        {/* 3 LINHAS PEDIDAS */}
        <div className="contact-info">
          {/* Linha 1 — Email */}
            <a
              href="mailto:mais55lab@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button mail-button"
            >
              <img src={Mail} alt="Mail" className="icon" />
              mais55lab@gmail.com
            </a>

          {/* Linha 2 — Telefone + WhatsApp */}
          <a
            href="https://wa.me/351912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button whatsapp-button"
          >
            <img src={WhatsApp} alt="WhatsApp" className="icon" />
            +351 912 345 678
          </a>

          {/* Linha 3 — Instagram */}
          <a
            href="https://www.instagram.com/mais55.lab/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button instagram-button"
          >
            <img src={Instagram} alt="Instagram" className="icon" />
            @mais55.lab
          </a>
        

      </div>
    </div>
  );
};

export default Contactos;
