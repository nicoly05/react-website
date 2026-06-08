import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css"
import Instagram from '../assets/Instagram.png';
import HomeImage from '../assets/HomeImage.jpg';


function Home() {
  return (
  <div className="home">
  
  {/* Hero Section */}
  <img src={HomeImage} alt="Hero" className="heroImage" />

  {/* Projects Preview Section */}
  <div className="sectionContainer projectsSection">
    <div className="sectionContent">
      <h2>Os Nossos Projetos</h2>
      <p className="sectionDescription">Descubra o nosso portfólio de trabalhos criativos e inovadores</p>
      <div className="previewCards">
        <div className="previewCard">
          <div className="cardIcon">🎨</div>
          <h3>Identidade Visual</h3>
          <p>Logotipos, paletas de cores e manuais de marca</p>
        </div>
        <div className="previewCard">
          <div className="cardIcon">📱</div>
          <h3>Gestão de Redes</h3>
          <p>Conteúdo estratégico para redes sociais</p>
        </div>
        <div className="previewCard">
          <div className="cardIcon">🎬</div>
          <h3>Captação de Imagens</h3>
          <p>Fotografia e vídeo profissional</p>
        </div>
      </div>
      <Link to="/Projetos" className="sectionLink">Ver Todos os Projetos →</Link>
    </div>
  </div>

  {/* Services Preview Section */}
  <div className="sectionContainer servicesSection">
    <div className="sectionContent">
      <h2>Os Nossos Serviços</h2>
      <p className="sectionDescription">Soluções completas para elevar a sua marca</p>
      <div className="servicesList">
        <div className="serviceItem">
          <span className="serviceNumber">01</span>
          <div className="serviceInfo">
            <h3>Identidade Visual</h3>
            <p>Logotipo, paleta de cores, tipografia e manual da marca</p>
          </div>
        </div>
        <div className="serviceItem">
          <span className="serviceNumber">02</span>
          <div className="serviceInfo">
            <h3>Gestão de Redes Sociais</h3>
            <p>Planejamento estratégico, criação de conteúdo e agendamento</p>
          </div>
        </div>
        <div className="serviceItem">
          <span className="serviceNumber">03</span>
          <div className="serviceInfo">
            <h3>Captação de Fotos e Vídeos</h3>
            <p>Ensaios, bastidores e vídeos institucionais</p>
          </div>
        </div>
        <div className="serviceItem">
          <span className="serviceNumber">04</span>
          <div className="serviceInfo">
            <h3>Tráfego Pago</h3>
            <p>Campanhas no Instagram e Facebook com segmentação precisa</p>
          </div>
        </div>
      </div>
      <Link to="/Servicos" className="sectionLink">Explorar Todos os Serviços →</Link>
    </div>
  </div>

  {/* Contact Section */}
  <div className="sectionContainer contactSection">
    <div className="sectionContent">
      <h2>Pronto para transformar a sua comunicação?</h2>
      <p className="sectionDescription">Vamos trabalhar juntos para elevar a sua marca ao próximo nível. Entre em contacto connosco.</p>
      <a href="https://wa.me/351999888777" className="sectionLink primary">Saiba Mais →</a>
    </div>
  </div>

</div>

  )
}

export default Home;
