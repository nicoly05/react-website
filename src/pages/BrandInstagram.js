import React from 'react';
import { useParams, Link } from 'react-router-dom';
import InstagramMedia from '../components/InstagramMedia';
import '../styles/BrandInstagram.css';

// Import the same data from Projetos.js
const imagens = [
  { 
    id: 1, 
    titulo: "Instagram", 
    legenda: "Identidade Visual",
    descricao: "Desenvolvimento de identidade visual para Instagram",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DYc50Vex_Qw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        caption: "Identidade visual criada para Instagram",
        serviceTags: ["Identidade Visual"],
        brand: "Instagram"
      },
      {
        instagramUrl: "https://www.instagram.com/p/C2B3C4D5E6F/",
        caption: "Outro exemplo de identidade visual",
        serviceTags: ["Identidade Visual"],
        brand: "Instagram"
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
  { 
    id: 4, 
    titulo: "Lust", 
    legenda: "Cobertura em tempo real",
    descricao: "Cobertura em tempo real para Lust",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C9I0J1K2L3M/",
        caption: "Cobertura em tempo real para Lust",
        serviceTags: ["Cobertura em tempo real"],
        brand: "Lust"
      }
    ],
    profileUrl: "https://www.instagram.com/lust/"
  },
  { 
    id: 5, 
    titulo: "TikTok", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para TikTok",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C0J1K2L3M4N/",
        caption: "Gestão de redes sociais para TikTok",
        serviceTags: ["Gestão de Redes"],
        brand: "TikTok"
      }
    ],
    profileUrl: "https://www.instagram.com/tiktok/"
  },
  { 
    id: 6, 
    titulo: "Continente", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Continente",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C1K2L3M4N5O/",
        caption: "Gestão de redes sociais para Continente",
        serviceTags: ["Gestão de Redes"],
        brand: "Continente"
      }
    ],
    profileUrl: "https://www.instagram.com/continente/"
  },
  { 
    id: 7, 
    titulo: "X", 
    legenda: "Tráfego Pago",
    descricao: "Tráfego pago para X (Twitter)",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C2L3M4N5O6P/",
        caption: "Tráfego pago para X (Twitter)",
        serviceTags: ["Tráfego Pago"],
        brand: "X"
      }
    ],
    profileUrl: "https://www.instagram.com/x/"
  },
  { 
    id: 8, 
    titulo: "TGB", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais e identidade visual para TGB",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C3M4N5O6P7Q/",
        caption: "Gestão de redes sociais e identidade visual para TGB",
        serviceTags: ["Gestão de Redes", "Identidade Visual"],
        brand: "TGB"
      }
    ],
    profileUrl: "https://www.instagram.com/tgb/"
  },
  { 
    id: 9, 
    titulo: "Google", 
    legenda: "Motion Design",
    descricao: "Motion design e edição para Google",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C4N5O6P7Q8R/",
        caption: "Motion design e edição para Google",
        serviceTags: ["Motion Design"],
        brand: "Google"
      }
    ],
    profileUrl: "https://www.instagram.com/google/"
  },
  { 
    id: 10, 
    titulo: "Apple", 
    legenda: "Captação de Fotos e Vídeos",
    descricao: "Captação de fotos e vídeos para Apple",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C5O6P7Q8R9S/",
        caption: "Captação de fotos e vídeos para Apple",
        serviceTags: ["Captação de Fotos e Vídeos"],
        brand: "Apple"
      }
    ],
    profileUrl: "https://www.instagram.com/apple/"
  },
  { 
    id: 11, 
    titulo: "Wrestling", 
    legenda: "Identidade Visual",
    descricao: "Identidade visual para Wrestling",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C6P7Q8R9S0T/",
        caption: "Identidade visual para Wrestling",
        serviceTags: ["Identidade Visual"],
        brand: "Wrestling"
      }
    ],
    profileUrl: "https://www.instagram.com/wrestling/"
  },
  { 
    id: 12, 
    titulo: "WhatsApp", 
    legenda: "Edição de Fotos e Vídeos",
    descricao: "Edição de fotos e vídeos para WhatsApp",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C7Q8R9S0T1U/",
        caption: "Edição de fotos e vídeos para WhatsApp",
        serviceTags: ["Edição de Fotos e Vídeos"],
        brand: "WhatsApp"
      }
    ],
    profileUrl: "https://www.instagram.com/whatsapp/"
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
      <div className="brand-header">
        <Link to="/Projetos" className="back-link">← Voltar para Projetos</Link>
        <h1 className="brand-title">{brand.titulo}</h1>
        <p className="brand-category">{brand.legenda}</p>
        <p className="brand-description">{brand.descricao}</p>
      </div>
        <div className="instagram-posts">
          {brand.instagramPosts && brand.instagramPosts.length > 0 ? (
            brand.instagramPosts.map((post, index) => (
              <InstagramMedia
                key={index}
                instagramUrl={post.instagramUrl}
                caption={post.caption}
                serviceTags={post.serviceTags}
                brand={post.brand}
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
