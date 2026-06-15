import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css"
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

  // Lista dos serviços (mesmos cards que já tens)
const servicesList = [
  { icon: "🎨", title: "Identidade Visual", description: "Logotipos, paletas de cores e manuais de marca" },
  { icon: "📱", title: "Gestão de Redes", description: "Conteúdo estratégico para redes sociais" },
  { icon: "📷", title: "Captação de Imagens", description: "Fotografia e vídeo profissional" },
  { icon: "🎬", title: "Edição de Fotos e Vídeos", description: "Tratamento de imagens e montagem" },
  { icon: "📱", title: "Tráfego Pago", description: "Campanhas, segmentação e otimização" },
  { icon: "🎨", title: "Motion Design", description: "Animação de logo e vídeo publicitário" },
  { icon: "📹", title: "Cobertura em Tempo Real", description: "Stories, reels e lives" },
  { icon: "🎙️", title: "Produção Audiovisual", description: "Vídeos institucionais e comerciais" },
  { icon: "🎨", title: "Design Gráfico", description: "Artes, flyers e materiais visuais" }
];

const [servicesIndex, setServicesIndex] = useState(0);
const servicesPerPage = 3;
const maxServicesIndex = Math.max(0, servicesList.length - servicesPerPage);

const handlePrevServices = () => {
  setServicesIndex(prev => prev === 0 ? maxServicesIndex : prev - 1);
};

const handleNextServices = () => {
  setServicesIndex(prev => prev >= maxServicesIndex ? 0 : prev + 1);
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
         <div className="services-carousel">
      <button className="carousel-arrow left" onClick={handlePrevServices}>←</button>

      <div className="services-carousel-container">
        <div
          className="services-carousel-track"
          style={{ transform: `translateX(-${servicesIndex * (100 / 3)}%)` }}
        >
          {servicesList.map((service, index) => (
            <div key={index} className="previewCard carousel-item">
              <div className="cardIcon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-arrow right" onClick={handleNextServices}>→</button>
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
