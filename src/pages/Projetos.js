import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projetos.css';
import Victory from '../assets/Victory.png';
import TwitterX from '../assets/TwitterX.png';
import Google from '../assets/Google.png';
import Apple from '../assets/Apple.png';
import JanahEstetica from '../assets/JanahEstetica.png';
import BenficaCascaisMalveira from '../assets/BenficaCascaisMalveira.png';
import Ruche from '../assets/Ruche.png';
import WrestleFest from '../assets/WrestleFest.png';
import UAPovoense from '../assets/UAPovoense.png';
import TGB from '../assets/TGB.png';
import WhatsApp from '../assets/Whatsapp.png';
import { useSearchParams } from 'react-router-dom';


const imagens = [
  { 
    id: 1, 
    src: WrestleFest, 
    categoria: [1, 10], 
    titulo: "WrestleFest", 
    legenda: "Identidade Visual",
    descricao: "Desenvolvimento de identidade visual para WrestleFest"
  },
  { 
    id: 2, 
    src: JanahEstetica, 
    categoria: [3,11], 
    titulo: "Janah", 
    legenda: "Captação de Fotos e Vídeos",
    descricao: "Captação de fotos e vídeos para RTP"
  },
  { 
    id: 3, 
    src: BenficaCascaisMalveira, 
    categoria: [1, 12], 
    titulo: "Benfica Cascais Malveira", 
    legenda: "Identidade Visual",
    descricao: "Identidade visual e gestão de redes sociais para Benfica Cascais Malveira"
  },
  { 
    id: 4, 
    src: UAPovoense, 
    categoria: [7, 12], 
    titulo: "UAPovoense", 
    legenda: "Cobertura em tempo real",
    descricao: "Cobertura em tempo real para UAPovoense"
  },
  { 
    id: 5, 
    src: Victory, 
    categoria: [2, 12], 
    titulo: "Victory", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Victory"
  },
  { 
    id: 6, 
    src: Ruche, 
    categoria: [2, 13], 
    titulo: "Ruche", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Ruche"
  },
  { 
    id: 7, 
    src: TwitterX, 
    categoria: [5, 2, 9], 
    titulo: "X", 
    legenda: "Tráfego Pago",
    descricao: "Tráfego pago para X (Twitter)"
  },
  { 
    id: 8, 
    src: TGB, 
    categoria: [2, 1], 
    titulo: "TGB", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais e identidade visual para TGB"
  },
  { 
    id: 9, 
    src: Google, 
    categoria: [6, 4], 
    titulo: "Google", 
    legenda: "Motion Design",
    descricao: "Motion design e edição para Google"
  },
  { 
    id: 10, 
    src: Apple, 
    categoria: [3, 8], 
    titulo: "Apple", 
    legenda: "Captação de Fotos e Vídeos",
    descricao: "Captação de fotos e vídeos para Apple"
  },
  { 
    id: 11, 
    src: WhatsApp, 
    categoria: [4, 2], 
    titulo: "WhatsApp", 
    legenda: "Edição de Fotos e Vídeos",
    descricao: "Edição de fotos e vídeos para WhatsApp"
  },
];

function Projetos() {
  // const [filtro, setFiltro] = useState('todos');

  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get('categoria');
  const [filtro, setFiltro] = useState(categoriaParam ? Number(categoriaParam) : 'todos');


  const imagensFiltradas =
    filtro === 'todos' ? imagens : imagens.filter((img) => img.categoria.includes(filtro));

  return (
    <div className="projetosContainer">
      <h1>Galeria de Projetos</h1>

      <div className="botoesFiltro">
        <button onClick={() => setFiltro('todos')}>Todos</button>
        <button onClick={() => setFiltro(1)}>Identidade Visual</button>
        <button onClick={() => setFiltro(2)}>Gestão de Redes Sociais</button>
        <button onClick={() => setFiltro(3)}>Captação de Fotos e Vídeos</button>
        <button onClick={() => setFiltro(4)}>Edição de Fotos e Vídeos</button>
        <button onClick={() => setFiltro(5)}>Tráfego Pago</button>
        <button onClick={() => setFiltro(6)}>Motion Design</button>
        <button onClick={() => setFiltro(7)}>Cobertura em tempo real</button>
        <button onClick={() => setFiltro(8)}>Produção Audiovisual</button>
        <button onClick={() => setFiltro(9)}>Design Gráfico</button>
        <button onClick={() => setFiltro(10)}>Eventos</button>
        <button onClick={() => setFiltro(11)}>Estética & Moda</button>
        <button onClick={() => setFiltro(12)}>Desporto</button>
        <button onClick={() => setFiltro(13)}>Gastronomia</button>
        
      </div>

      <div className="gradeImagens">
        {imagensFiltradas.map((img) => (
          <Link to={`/brand-instagram/${img.id}`} key={img.id} className="imagemBox">
            <div className="imagemConteudo">
              <img src={img.src} alt={img.titulo} />
              <div className="overlay">
                <h3>{img.titulo}</h3>
                <p>{img.legenda}</p>
              </div>
            </div>
          </Link>

        ))}
      </div>

    </div>
  );
}

export default Projetos;
