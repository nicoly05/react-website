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
            <li><Link to="/Servicos?categoria=1">Identidade Visual</Link></li>
            <li><Link to="/Servicos?categoria=2">Gestão de Redes</Link></li>
            <li><Link to="/Servicos?categoria=3">Captação e Edição de Fotos e Vídeos</Link></li>
            <li><Link to="/Servicos?categoria=6">Produção Audiovisual</Link></li>
            <li><Link to="/Servicos?categoria=7">Design Gráfico</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contactos</h4>
          <ul>
            <li><a href="mailto:mais55lab@gmail.com">📧 mais55lab@gmail.com</a></li>
            <li><a href="tel:+351912345678">📱 +351 912 345 678</a></li>
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
