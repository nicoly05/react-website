import React from 'react';
import { useParams, Link } from 'react-router-dom';
import InstagramEmbed from '../components/InstagramEmbed';
import '../styles/BrandInstagram.css';

// Import the same data from Projetos.js
const imagens = [
  { 
    id: 1, 
    titulo: "WrestleFest", 
    legenda: "Identidade Visual",
    descricao: "Desenvolvimento de identidade visual para WrestleFest",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DO3_NfjCLPR/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        caption: "Identidade visual criada para WrestleFest",
        serviceTags: ["Identidade Visual"],
        brand: "WrestleFest"
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOwojtYCPs7/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        caption: "Outro exemplo de identidade visual",
        serviceTags: ["Identidade Visual"],
        brand: "WrestleFest"
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOy1RKbiFA6/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        serviceTags: ["Identidade Visual"],
        brand: "WrestleFest"
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOt8J57iCDF/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        caption: "Outro exemplo de identidade visual",
        serviceTags: ["Identidade Visual"],
        brand: "WrestleFest"
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOUOfl6iOE6/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        caption: "Outro exemplo de identidade visual",
        serviceTags: ["Identidade Visual"],
        brand: "WrestleFest"
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOrP5u5iKii/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        caption: "Outro exemplo de identidade visual",
        serviceTags: ["Identidade Visual"],
        brand: "WrestleFest"
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOHXG8cCOcx/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        caption: "Outro exemplo de identidade visual",
        serviceTags: ["Identidade Visual"],
        brand: "WrestleFest"
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DN6AJ_viDp_/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        caption: "Outro exemplo de identidade visual",
        serviceTags: ["Identidade Visual"],
        brand: "WrestleFest"
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DNwEWNxUGjC/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        caption: "Outro exemplo de identidade visual",
        serviceTags: ["Identidade Visual"],
        brand: "WrestleFest"
      }
    ],
    profileUrl: "https://www.instagram.com/instagram/"
  },
  { 
    id: 2, 
    titulo: "RTP", 
    legenda: "Captação de Fotos e Vídeos",
    descricao: "Captação de fotos e vídeos para RTP",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C4D5E6F7G8H/",
        caption: "Captação de fotos e vídeos para RTP",
        serviceTags: ["Captação de Fotos e Vídeos"],
        brand: "RTP"
      }
    ],
    profileUrl: "https://www.instagram.com/rtp/"
  },
  { 
    id: 3, 
    titulo: "PingoDoce", 
    legenda: "Identidade Visual",
    descricao: "Identidade visual e gestão de redes sociais para Pingo Doce",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C6F7G8H9I0J/",
        caption: "Identidade visual para Pingo Doce",
        serviceTags: ["Identidade Visual", "Gestão de Redes"],
        brand: "Pingo Doce"
      },
      {
        instagramUrl: "https://www.instagram.com/p/C7G8H9I0J1K/",
        caption: "Conteúdo estratégico para Pingo Doce",
        serviceTags: ["Gestão de Redes"],
        brand: "Pingo Doce"
      },
      {
        instagramUrl: "https://www.instagram.com/p/C8H9I0J1K2L/",
        caption: "Campanha para Pingo Doce",
        serviceTags: ["Gestão de Redes"],
        brand: "Pingo Doce"
      }
    ],
    profileUrl: "https://www.instagram.com/pingodoce/"
  },
];

function BrandInstagram() {
  const { brandId } = useParams();

  const brand = imagens.find(img => img.id === parseInt(brandId));

  if (!brand) {
    return (
      <div className="brand-instagram-container">
        <h1>Marca não encontrada</h1>
        <Link to="/Projetos">Voltar para Projetos</Link>
      </div>
    );
  }

  return (
    <div className="brand-instagram-container">
      <Link to="/Projetos" className="back-link">← Voltar para Projetos</Link>
       <div className="brand-header">
       
        <h1 className="brand-title">{brand.titulo}</h1>
        <p className="brand-category">{brand.legenda}</p>
        <p className="brand-description">{brand.descricao}</p>
      </div>
        <div className="instagram-posts">
          {brand.instagramPosts && brand.instagramPosts.length > 0 ? (
            brand.instagramPosts.map((post, index) => (
              <InstagramEmbed
                key={index}
                url={post.instagramUrl}
              />
            ))
          ) : (
            <p className="no-content">Sem conteúdo de Instagram disponível para esta marca.</p>
          )}
        </div>
     
    </div>
  );
}

export default BrandInstagram;
