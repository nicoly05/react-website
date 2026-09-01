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
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOwojtYCPs7/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOy1RKbiFA6/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOy1RKbiFA6/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOt8J57iCDF/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOt8J57iCDF/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOUOfl6iOE6/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOrP5u5iKii/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOHXG8cCOcx/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DN6AJ_viDp_/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DNwEWNxUGjC/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DNwEWNxUGjC/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",

      }
    ],
  
  },
  { 
    id: 2, 
    titulo: "Janah Estética e Bem Estar", 
    legenda: "Captação de Fotos e Vídeos",
    descricao: "Captação de fotos e vídeos para Janah Estética e Bem Estar",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DRMatqsDHSL/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DLheLfUMqkY/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DRMaodZjKXe/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DFC71zhOgih/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DF7mo3fOH6m/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/p/DIK2wEJssB_/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/p/DIVe8jhsGqt/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DBmZsb4uFBN/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DB9TGqfO8_0/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      }
    ],
  },
  { 
    id: 3, 
    titulo: "Benfica Cascais Malveira", 
    legenda: "Identidade Visual",
    descricao: "Identidade visual e gestão de redes sociais para Benfica Cascais Malveira",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DErwOboujDc/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DKDXUdTI3_8/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      }
    ],
  },
   { 
    id: 4, 
    titulo: "União Atlético Povoense", 
    legenda: "Identidade Visual",
    descricao: "Identidade visual e gestão de redes sociais para União Atlético Povoense",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DN3JCLD0tIG/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      }
    ],
  },
   { 
    id: 5, 
    titulo: "Victory, Way To Win", 
    legenda: "Identidade Visual",
    descricao: "Identidade visual e gestão de redes sociais para Victory",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DMSv9oHImPI/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/C9p59xBiXto/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      }
    ],
  },
  { 
    id: 6, 
    titulo: "Ruche", 
    legenda: "Identidade Visual",
    descricao: "Identidade visual e gestão de redes sociais para Ruche",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/Cb0WzyVosB_/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/CdZOp_aI9nU/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/CjJHr2ToIbM/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/p/CdEsn3RIzEY/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      }
    ],
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
      <Link to="/Projetos" className="back-link2">← Voltar</Link>
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
