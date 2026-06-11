import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css"
import Instagram from '../assets/Instagram.png';
import HomeImage from '../assets/HomeImage.jpg';
import InstagramMedia from '../components/InstagramMedia';


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const instagramPosts = [
    {
      serviceTags: ["Gestão de Redes", "Conteúdo"],
      brand: "Benfica 1",
      instagramUrl: "https://www.instagram.com/reel/DYc50Vex_Qw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      serviceTags: ["Gestão de Redes", "Conteúdo"],
      serviceTags: ["Gestão de Redes", "Conteúdo"],
      brand: "Benfica 2",
      instagramUrl: "https://www.instagram.com/reel/DYc50Vex_Qw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      serviceTags: ["Gestão de Redes", "Conteúdo"],
      brand: "Benfica 3",
      instagramUrl: "https://www.instagram.com/reel/DYc50Vex_Qw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      serviceTags: ["Gestão de Redes", "Conteúdo"],
      brand: "Benfica 4",
      instagramUrl: "https://www.instagram.com/reel/DYc50Vex_Qw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, instagramPosts.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? instagramPosts.length - itemsPerPage : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  return (
  <div className="home">
  
  {/* Hero Section */}
  <img src={HomeImage} alt="Hero" className="heroImage" />

  {/* Projects Preview Section */}
  <div className="sectionContainer projectsSection">
    <div className="sectionContent">
      <h2>Os Nossos Serviços</h2>
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
         <div className="previewCard">
          <div className="cardIcon">🎨</div>
          <h3>Edição de Fotos e Vídeos</h3>
          <p>Tratamento de imagens, montagem de vídeos e eventos com padrão visual da sua marca</p>
        </div>
         <div className="previewCard">
          <div className="cardIcon">🎨</div>
          <h3>Tráfego Pago</h3>
          <p>Anúncios, campanhas, segmentação do público, relatórios e otimizações</p>
        </div>
         <div className="previewCard">
          <div className="cardIcon">🎨</div>
          <h3>Motion Design</h3>
          <p>Animação de logo e vídeo para publicidade</p>
        </div>
         <div className="previewCard">
          <div className="cardIcon">🎨</div>
          <h3>Cobertura em Tempo Real</h3>
          <p>Stories, reels, posts e live em tempo real</p>
        </div>
         <div className="previewCard">
          <div className="cardIcon">🎨</div>
          <h3>Produção Audiovisual</h3>
          <p>Logotipos, paletas de cores e manuais de marca</p>
        </div>
         <div className="previewCard">
          <div className="cardIcon">🎨</div>
          <h3>Design Gráfico</h3>
          <p>Logotipos, paletas de cores e manuais de marca</p>
        </div>
      </div>
      <Link to="/Servicos" className="sectionLink">Ver Todos os Serviços →</Link>
    </div>
  </div>

  {/* Services Preview Section */}
  <div className="sectionContainer servicesSection">
    <div className="sectionContent">
      <h2>Os Nossos Projetos</h2>
      <p className="sectionDescription">Soluções completas para elevar a sua marca</p>
      
      {/* Instagram Carousel */}
      <div className="instagram-carousel">
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={handlePrevious}
        >
          ←
        </button>
        
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {instagramPosts.map((post, index) => (
              <div key={index} className="carousel-item">
                <InstagramMedia
                  caption={post.caption}
                  serviceTags={post.serviceTags}
                  brand={post.brand}
                  instagramUrl={post.instagramUrl}
                />
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={handleNext}
        >
          →
        </button>
      </div>
      
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
      <Link to="/Projetos" className="sectionLink">Explorar Todos os Projetos →</Link>
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
