import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css"
import HomeImage from '../assets/HomeImage.png';
import InstagramEmbed from '../components/InstagramEmbed';


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const instagramPosts = [
    {
      serviceTags: ["Gestão de Redes", "Conteúdo"],
      brand: "Benfica 1",
      instagramUrl: "https://www.instagram.com/reel/DM8Eht2owfI/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
    },
    {
      serviceTags: ["Gestão de Redes", "Conteúdo"],
      brand: "Benfica 2",
      instagramUrl: "https://www.instagram.com/reel/DMN7QC5ISCP/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
    },
    {
      serviceTags: ["Gestão de Redes", "Conteúdo"],
      brand: "Benfica 3",
      instagramUrl: "https://www.instagram.com/reel/DOgNzgdDAft/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
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
  { icon: "🎨", title: "Identidade Visual", description: "Logotipos, paletas de cores e manuais de marca", categoria: 1 },
  { icon: "📱", title: "Gestão de Redes", description: "Conteúdo estratégico para redes sociais", categoria: 2 },
  { icon: "📷", title: "Captação de Imagens", description: "Fotografia e vídeo profissional", categoria: 3 },
  { icon: "🎬", title: "Edição de Fotos e Vídeos", description: "Tratamento de imagens e montagem", categoria: 4 },
  { icon: "📱", title: "Tráfego Pago", description: "Campanhas, segmentação e otimização", categoria: 5 },
  { icon: "🎨", title: "Motion Design", description: "Animação de logo e vídeo publicitário", categoria: 6 },
  { icon: "📹", title: "Cobertura em Tempo Real", description: "Stories, reels e lives", categoria: 7 },
  { icon: "🎙️", title: "Produção Audiovisual", description: "Vídeos institucionais e comerciais", categoria: 8 },
  { icon: "🎨", title: "Design Gráfico", description: "Artes, flyers e materiais visuais", categoria: 9 }
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
            <Link key={index} to={`/Servicos?categoria=${service.categoria}`} className="previewCard carousel-item">
              <div className="cardIcon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
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
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {instagramPosts.map((post, index) => (
              <div key={index} className="carousel-item">
                <InstagramEmbed
                  url={post.instagramUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="servicesList">
        <Link to="/Projetos?categoria=10">
        <div className="serviceItem">
          <span className="serviceNumber">01</span>
          <div className="serviceInfo">
            <h3>Eventos</h3>
          </div>
        </div>
        </Link>
        <Link to="/Projetos?categoria=11">
        <div className="serviceItem">
          <span className="serviceNumber">02</span>
          <div className="serviceInfo">
            <h3>Estética e Moda</h3>
          </div>
        </div>
        </Link>
        <Link to="/Projetos?categoria=12">
        <div className="serviceItem">
          <span className="serviceNumber">03</span>
          <div className="serviceInfo">
            <h3>Desporto</h3>
          </div>
        </div>
        </Link>
        <Link to="/Projetos?categoria=13">
        <div className="serviceItem">
          <span className="serviceNumber">04</span>
          <div className="serviceInfo">
            <h3>Gastronomia</h3>
          </div>
        </div>
        </Link>
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
