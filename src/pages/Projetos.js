import React, { useState } from 'react';
import '../styles/Projetos.css';
import Instagram from '../assets/Instagram.png';
import TikTok from '../assets/TikTok.webp';
import TwitterX from '../assets/TwitterX.png';
import Google from '../assets/Google.png';
import Apple from '../assets/Apple.png';
import RTP from '../assets/RTP.png';
import PingoDoce from '../assets/PingoDoce.jpg';
import Continente from '../assets/Continente.png';
import Wrestling from '../assets/Wrestling.png';
import Lust from '../assets/Lust.png';
import TGB from '../assets/TGB.png';
import WhatsApp from '../assets/WhatsApp.png';


const imagens = [
  { id: 1, src: Instagram, categoria: 1, titulo: "Instagram", legenda: "Legenda" },
  { id: 2, src: RTP, categoria: 3, titulo: "RTP", legenda: "Legenda" },
  { id: 3, src: PingoDoce, categoria: 1, titulo: "PingoDoce", legenda: "Legenda" },
  { id: 4, src: Lust, categoria: 7, titulo: "Lust", legenda: "Legenda" },
  { id: 5, src: TikTok, categoria: 2, titulo: "TikTok", legenda: "Legenda" },
  { id: 6, src: Continente, categoria: 2, titulo: "Continente", legenda: "Legenda" },
  { id: 7, src: TwitterX, categoria: 5, titulo: "X", legenda: "Legenda" },
  { id: 8, src: TGB, categoria: 2, titulo: "TGB", legenda: "Legenda" },
  { id: 9, src: Google, categoria: 6, titulo: "Google", legenda: "Legenda" },
  { id: 10, src: Apple, categoria: 3, titulo: "Apple", legenda: "Legenda" },
  { id: 11, src: Wrestling, categoria: 1, titulo: "Wrestling", legenda: "Legenda" },
  { id: 12, src: WhatsApp, categoria: 4, titulo: "WhatsApp", legenda: "Legenda" },
];

function Projetos() {
  const [filtro, setFiltro] = useState('todos');

  const imagensFiltradas =
    filtro === 'todos' ? imagens : imagens.filter((img) => img.categoria === filtro);

  return (
    <div className="projetosContainer">
      <h1>Galeria de Imagens</h1>

      <div className="botoesFiltro">
        <button onClick={() => setFiltro('todos')}>Todos</button>
        <button onClick={() => setFiltro(1)}>Identidade Visual</button>
        <button onClick={() => setFiltro(2)}>Gestão de Redes</button>
        <button onClick={() => setFiltro(3)}>Captação de Fotos e Vídeos</button>
        <button onClick={() => setFiltro(4)}>Edição de Fotos e Vídeos</button>
        <button onClick={() => setFiltro(5)}>Tráfego Pago</button>
        <button onClick={() => setFiltro(6)}>Motion Design</button>
        <button onClick={() => setFiltro(7)}>Cobertura em tempo real</button>
      </div>

      <div className="gradeImagens">
        {imagensFiltradas.map((img) => (
          <div className="imagemBox" key={img.id}>
            <img src={img.src} alt={img.titulo} />
            <h3>{img.titulo}</h3>
            <p>{img.legenda}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projetos;
