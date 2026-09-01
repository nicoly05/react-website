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
  { title: "Identidade Visual", description: "Logotipos, paletas de cores e manuais de marca", categoria: 1 },
  { title: "Gestão de Redes", description: "Conteúdo estratégico para redes sociais", categoria: 2 },
  { title: "Captação de Imagens", description: "Fotografia e vídeo profissional", categoria: 3 },
  { title: "Edição de Fotos e Vídeos", description: "Tratamento de imagens e montagem", categoria: 4 },
  { title: "Cobertura em Tempo Real", description: "Stories, reels e lives", categoria: 5 },
  { title: "Produção Audiovisual", description: "Vídeos institucionais e comerciais", categoria: 6 },
  { title: "Design Gráfico", description: "Artes, flyers e materiais visuais", categoria: 7 }
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
    {/* <img src={HomeImage} alt="Hero" className="heroImage" /> */}
    
   {/* Contact Section */}
    <div className="sectionContainer contactSection">
    <div className="sectionContent">
      <h2>A sua marca merece ser vista como é</h2>
      <p className="sectionDescription">Somos a +55 lab. Uma agência de comunicação que transforma a presença digital de negócios em Portugal em algo que atrai, convence e converte.</p>
      <a href="https://wa.me/351999888777" className="sectionLink primary">Fale connosco</a>
    </div>
  </div>

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
            <Link key={index} to={`/Servicos?categoria=${service.categoria}`} className={`previewCard carousel-item ${index === servicesIndex + 1 ? 'middle-card' : ''}`}>
              <div className="cardIcon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <button className="carousel-arrow right" onClick={handleNextServices}>→</button>
    </div>
      
      <Link to="/Servicos?categoria=1" className="sectionLink">Ver Todos os Serviços →</Link>
    </div>
  </div>

  {/* Services Preview Section */}
  <div className="sectionContainer servicesSection">
    <div className="sectionContent">
      <h2>Os Nossos Projetos</h2>
      <p className="sectionDescription">Soluções completas para elevar a sua marca</p>
      
 
      
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

  {/* Google Reviews Section */}
  <div className="sectionContainer reviewsSection">
    <div className="sectionContent">
      <h2>Avaliações</h2>
      <p className="sectionDescription">O que os nossos clientes dizem sobre nós no Google.</p>

      <div className="reviewsList">
        {[
          {
            author: 'Nelson Pereira',
            rating: 5,
            excerpt: 'Tive a oportunidade de trabalhar com o +55 Lab no meu projeto Portugal Wrestlefest e cinco estrelas na verdade não é suficiente para avaliar o profissionalismo e a qualidade do trabalho fornecido. Pontuais, Incansáveis e prestaveis. Não há melhor.',
            url: 'https://maps.app.goo.gl/hohZUud4t4Yt5FBY6'
          },
          {
            author: 'Victory Way To Win',
            rating: 5,
            excerpt: 'O trabalho que fazem é de excelência. A sensibilidade que tem para se enquadrar em cada situação que lhes é proposta permite fazerem um trabalho diferenciado, de proximidade e sempre adequado à realidade que encontram. A dinâmica que tem criado na nossa empresa nas atividades que participarem tem sido fundamental para ter semanas de treino com os nossos atletas mais atrativas e criativas. Obrigado pelo vosso trabalho.',
            url: 'https://maps.app.goo.gl/6tW6RdMdFXm51HEFA'
          },
          {
            author: 'Janah Cardoso',
            rating: 5,
            excerpt: 'As meninas são excelentes profissionais. Começamos como parceria e desde então aprovei o trabalho delas e hoje sou uma cliente muito satisfeita e indico pra quem eu gosto',
            url: 'https://maps.app.goo.gl/HTPhbuWWVqvCm6kw7'
          }
        ].map((review, i) => (
          <a key={i} href={review.url} target="_blank" rel="noopener noreferrer" className="reviewCard">
            <div className="reviewHeader">
              <strong>{review.author}</strong>
              <span className="reviewRating">{'★'.repeat(review.rating)}</span>
            </div>
            <p className="reviewExcerpt">{review.excerpt}</p>
          </a>
        ))}
      </div>

      <div className="reviewActions">
        <a className="writeReviewBtn" href="https://maps.app.goo.gl/52FyPSByYU2snACS6" target="_blank" rel="noopener noreferrer">Deixar uma avaliação</a>
      </div>
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
