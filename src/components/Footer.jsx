import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mais55 Lab</h3>
          <p>Soluções criativas para elevar a sua marca ao próximo nível.</p>
        </div>
        
        <div className="footer-section">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Servicos">Serviços</Link></li>
            <li><Link to="/Projetos">Projetos</Link></li>
            <li><Link to="/SobreNos">Sobre Nós</Link></li>
            <li><Link to="/Contactos">Contactos</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Serviços</h4>
          <ul>
            <li>Identidade Visual</li>
            <li>Gestão de Redes</li>
            <li>Captação de Imagens</li>
            <li>Edição de Fotos e Vídeos</li>
            <li>Tráfego Pago</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contactos</h4>
          <ul>
            <li>📧 mais55lab@gmail.com</li>
            <li>📱 +351 912 345 678</li>
            <li>📍 Lisboa, Portugal</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 +55 Lab. Agência de comunicação. Portugal</p>
      </div>
    </footer>
  );
}

export default Footer;
