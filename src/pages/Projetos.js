import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projetos.css';
import Victory from '../assets/Victory.png';
import JanahEstetica from '../assets/JanahEstetica.png';
import BenficaCascaisMalveira from '../assets/BenficaCascaisMalveira.png';
import Ruche from '../assets/Ruche.png';
import WrestleFest from '../assets/WrestleFest.png';
import UAPovoense from '../assets/UAPovoense.png';
import CafePortugal from '../assets/CafePortugal.png';
import GeloAugusta from '../assets/GeloAugusta.png';
import GeloRossio from '../assets/GeloRossio.png';
import Ouro from '../assets/Ouro.jpeg';
import TavernaDoPescador from '../assets/TavernaDoPescador.png';
import VillaDiRoma from '../assets/VillaDiRoma.png';
import MariaLidiane from '../assets/MariaLidiane1.jpg';
import TopPlayer from '../assets/TopPlayer.png';
import Academia from '../assets/Academia100.png';
import AnaFerreira from '../assets/AnaFerreira.jpg';
import Bailo from '../assets/Bailo.png';
import VilaDias from '../assets/VilaDias.png';
import Brasa from '../assets/Brasa.jpeg';
import DS from '../assets/DS.jpeg';
import TribX from '../assets/TribX.jpeg';
import Skechers from '../assets/Skechers.png';
import SeminarioAdvogados from '../assets/SeminarioAdvogados.jpg';
import JulitaImoveis from '../assets/JulitaImoveis.jpeg';
import Novex from '../assets/Novex.jpeg';
import EditePsicologa from '../assets/EditePsicologa.jpeg';
import TEMPORARIO from '../assets/temporario.jpeg';
import { useSearchParams } from 'react-router-dom';


const imagens = [
  { 
    id: 1, 
    src: WrestleFest, 
    categoria: [1, 2, 3, 4, 5, 6, 7, 8], 
    titulo: "WrestleFest", 
    legenda: "Identidade Visual, Gestão de Redes, Captação e Edição de Fotos e Vídeos, Cobertura em tempo real, Produção Audiovisual, Design Gráfico e Eventos",
    descricao: "Desenvolvimento de identidade visual, gestão de redes sociais, captação e edição de fotos e vídeos, cobertura em tempo real, produção audiovisual, design gráfico e eventos para WrestleFest"
  },
  { 
    id: 2, 
    src: JanahEstetica, 
    categoria: [3, 4, 9], 
    titulo: "Janah", 
    legenda: "Captação e edição de Fotos e Vídeos",
    descricao: "Captação e edição de fotos e vídeos para RTP"
  },
  { 
    id: 3, 
    src: BenficaCascaisMalveira, 
    categoria: [1, 2, 3, 4, 10], 
    titulo: " Escola Benfica Cascais Malveira", 
    legenda: "Identidade Visual, Gestão de Redes, Captação e Edição de Fotos e Vídeos",
    descricao: "Identidade visual, gestão de redes sociais e captação e edição de fotos e vídeos para Benfica Cascais Malveira"
  },
  { 
    id: 4, 
    src: UAPovoense, 
    categoria: [3, 4, 10],
    titulo: "UAPovoense", 
    legenda: "Captação e edição de Fotos e Vídeos",
    descricao: "Captação e edição de fotos e vídeos para UAPovoense"
  },
  { 
    id: 5, 
    src: Victory, 
    categoria: [3, 4, 10], 
    titulo: "Victory", 
    legenda: "Captação e edição de Fotos e Vídeos",
    descricao: "Captação e edição de fotos e vídeos para Victory"
  },
  { 
    id: 6, 
    src: Ruche, 
    categoria: [3, 11], 
    titulo: "Ruche", 
    legenda: "Captação e edição de Fotos e Vídeos",
    descricao: "Captação e edição de fotos e vídeos para Ruche"
  },
  { 
    id: 7, 
    src: CafePortugal, 
    categoria: [2, 11], 
    titulo: "Café Portugal", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Café Portugal"
  },
  { 
    id: 8, 
    src: GeloRossio, 
    categoria: [2, 11], 
    titulo: "Café Gelo", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Café Gelo"
  },
  { 
    id: 9, 
    src: TavernaDoPescador, 
    categoria: [2, 11], 
    titulo: "Taverna do Pescador", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Taverna do Pescador"
  },
  { 
    id: 10, 
    src: VillaDiRoma, 
    categoria: [2, 11], 
    titulo: "Villa di Roma", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Villa di Roma"
  },
  { 
    id: 11, 
    src: GeloAugusta, 
    categoria: [3, 11], 
    titulo: "Gelo Augusta", 
    legenda: "Captação de Fotos e Vídeos",
    descricao: "Captação e edição de fotos e vídeos para Gelo Augusta"
  },
  { 
    id: 12, 
    src: Ouro, 
    categoria: [2, 11], 
    titulo: "Restaurante Ouro", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Restaurante Ouro"
  },
  { 
    id: 13, 
    src: Brasa, 
    categoria: [2, 11], 
    titulo: "Brasa Lisboa", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Brasa Lisboa"
  },
  { 
    id: 14, 
    src: Academia, 
    categoria: [2, 10], 
    titulo: "Academia 100%", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Academia 100%"
  },
    { 
    id: 15, 
    src: AnaFerreira, 
    categoria: [2, 9], 
    titulo: "Ana Ferreira Hair", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Ana Ferreira Hair"
  },
    { 
    id: 16, 
    src: JulitaImoveis, 
    categoria: [3, 4], 
    titulo: "Julita Imóveis", 
    legenda: "Captura e edição de fotos e vídeos",
    descricao: "Captura e edição de fotos e vídeos para Julita Imóveis"
  },
    { 
    id: 17, 
    src: Bailo, 
    categoria: [2, 3, 4, 8], 
    titulo: "Bailo", 
    legenda: "Gestão de Redes, Captação e edição de fotos e vídeos",
    descricao: "Gestão de redes sociais, captação e edição de fotos e vídeos para Bailo"
  },
    { 
    id: 18, 
    src: TribX, 
    categoria: [2, 10], 
    titulo: "TribX", 
    legenda: "Gestão de Redes",
    descricao: "Gestão do Tik Tok para TribX"
  },
    { 
    id: 19, 
    src: VilaDias, 
    categoria: [2, 12], 
    titulo: "Vila Dias Alojamento Local", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Vila Dias Alojamento Local"
  },
   { 
    id: 20, 
    src: EditePsicologa, 
    categoria: [2], 
    titulo: "Edite Psicologa", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Edite Psicologa"
  },
   { 
    id: 21, 
    src: TopPlayer, 
    categoria: [2, 3, 4, 10], 
    titulo: "Top Player", 
    legenda: "Gestão de Redes, Captação e edição de fotos e vídeos",
    descricao: "Gestão de redes, captação e edição de fotos e vídeos para Top Player"
  },
   { 
    id: 22, 
    src: TEMPORARIO, 
    categoria: [2], 
    titulo: "Academia Barril", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Academia Barril"
  },
   { 
    id: 23, 
    src: TEMPORARIO, 
    categoria: [3, 4], 
    titulo: "Gabriela Rosa", 
    legenda: "Captura e edição de fotos e vídeos",
    descricao: "Captura e edição de fotos e vídeos para Gabriela Rosa"
  },
  { 
    id: 24, 
    src: DS, 
    categoria: [3, 4, 10], 
    titulo: "DS", 
    legenda: "Captação e edição de fotos e vídeos",
    descricao: "Captação e edição de fotos e vídeos para DS"
  },
  { 
    id: 25, 
    src: MariaLidiane, 
    categoria: [3, 9], 
    titulo: " Maria Lidiane Beauty", 
    legenda: "Captação e edição de fotos e vídeos",
    descricao: "Captação e edição de fotos e vídeos para Lidiane"
  },
  { 
    id: 26, 
    src: Skechers, 
    categoria: [3, 5, 8], 
    titulo: "Skechers - Nós Alive", 
    legenda: "Captação de fotos e vídeos em tempo real",
    descricao: "Captação de fotos e vídeos em tempo real para Skechers - Nós Alive"
  },
   { 
    id: 27, 
    src: Novex, 
    categoria: [3, 5, 8], 
    titulo: "Novex - Rock in Rio", 
    legenda: "Captação de fotos e vídeos em tempo real",
    descricao: "Captação de fotos e vídeos em tempo real para Novex - Rock in Rio"
  },
   { 
    id: 28, 
    src: TEMPORARIO, 
    categoria: [3, 5, 8], 
    titulo: "Visit Azores - BTL", 
    legenda: "Captação de fotos e vídeos em tempo real",
    descricao: "Captação de fotos e vídeos em tempo real para Visit Azores - BTL"
  },
   { 
    id: 29, 
    src: SeminarioAdvogados, 
    categoria: [3, 5, 8], 
    titulo: "Seminário Advogados", 
    legenda: "Captação de fotos e vídeos em tempo real",
    descricao: "Captação de fotos e vídeos em tempo real para Seminário Advogados"
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
        <button className={filtro === 'todos' ? 'active' : ''} onClick={() => setFiltro('todos')}>Todos</button>
        <button className={filtro === 1 ? 'active' : ''} onClick={() => setFiltro(1)}>Identidade Visual</button>
        <button className={filtro === 2 ? 'active' : ''} onClick={() => setFiltro(2)}>Gestão de Redes Sociais</button>
        <button className={filtro === 3 ? 'active' : ''} onClick={() => setFiltro(3)}>Captação de Fotos e Vídeos</button>
        <button className={filtro === 4 ? 'active' : ''} onClick={() => setFiltro(4)}>Edição de Fotos e Vídeos</button>
        <button className={filtro === 5 ? 'active' : ''} onClick={() => setFiltro(5)}>Cobertura em tempo real</button>
        <button className={filtro === 6 ? 'active' : ''} onClick={() => setFiltro(6)}>Produção Audiovisual</button>
        <button className={filtro === 7 ? 'active' : ''} onClick={() => setFiltro(7)}>Design Gráfico</button>
        <button className={filtro === 8 ? 'active' : ''} onClick={() => setFiltro(8)}>Eventos</button>
        <button className={filtro === 9 ? 'active' : ''} onClick={() => setFiltro(9)}>Estética & Moda</button>
        <button className={filtro === 10 ? 'active' : ''} onClick={() => setFiltro(10)}>Desporto</button>
        <button className={filtro === 11 ? 'active' : ''} onClick={() => setFiltro(11)}>Gastronomia</button>
        <button className={filtro === 12 ? 'active' : ''} onClick={() => setFiltro(12)}>Turismo</button>
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
