import React, { useState, useEffect } from 'react';
import "../styles/Contactos.css";
import WhatsApp from '../assets/Whatsapp.png';
import Instagram from '../assets/Instagram.png';
import Mail from '../assets/Mail.png';
import Victory from '../assets/Victory.png';
import JanahEstetica from '../assets/JanahEstetica.png';
import BenficaCascaisMalveira from '../assets/BenficaCascaisMalveira.png';
import Ruche from '../assets/Ruche.png';
import WrestleFest from '../assets/WrestleFest.png';
import UAPovoense from '../assets/UAPovoense.png';

function Contactos() {
  const carouselImages = [
    Victory,
    JanahEstetica,
    BenficaCascaisMalveira,
    Ruche,
    WrestleFest,
    UAPovoense,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(t);
  }, [carouselImages.length]);

  return (
    <div className='contactos'>
      <div className="carouselContainer" aria-hidden="true">
        {carouselImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`carousel-${i}`}
            className={`carouselImage ${i === index ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="backgroundOverlay"></div>

      <div className="contactHeader">
        <h2 className="contactTitle">Fale Conosco</h2>
      </div>

      <div className="contact-info" role="group" aria-label="Contactos">
               <a
          href="tel:+351912345678"
          className="contact-button phone-button"
        >
          <img src={WhatsApp} alt="Phone" className="icon" />
          +351 912 345 678
        </a>
        <a
          href="mailto:mais55lab@gmail.com"
          className="contact-button mail-button"
        >
          <img src={Mail} alt="Mail" className="icon" />
          mais55lab@gmail.com
        </a>


      </div>

       <div className="contactHeader2">
        <h2 className="contactTitle">Siga a +55.lab</h2>
      </div>
        <div className="contact-info" role="group" aria-label="Contactos">
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
