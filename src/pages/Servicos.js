import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/Servicos.css'; 
import MetricasImg from '../assets/Metricas.png'; // ajusta o caminho conforme necessário
import IdentidadeVisual from '../assets/IdVisual.jpg'; 
import GestaoRedes from '../assets/GestaoRedes.jpg'; 
import CaptacaoImagens from '../assets/CaptacaoImagens.jpg'; 
import Edicao from '../assets/Edicao.jpg'; 
import TrafegoPago from '../assets/TrafegoPago.jpg'; 
import MotionDesign from '../assets/MotionDesign.jpg'; 
import TempoReal from '../assets/tempoReal.jpg'; 

function Servicos(){
  return (
    <div className="servicos">
  {/* Box 1 - Título com destaque */}
  <div className="boxTitulo">
    <h1>Os nossos <span>serviços</span></h1>
  </div>

  {/* Box 2 - Rosa, imagem à esquerda */}
 <div className="boxRosa">
    <div className="boxColuna boxImagem">
      <img src={IdentidadeVisual} alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>01. Identidade Visual</h2>
      <ul>
        <li>Logotipo</li>
        <li>Paleta de Cores e Tipografia</li>
        <li>Manual da marca</li>
        <li>Arte para eventos (convites, painéis, brindes)</li>
        <li>Personalização com propósito</li>
      </ul>
      <Link to="/Projetos?categoria=1">
      <button className='buttonBoxRosa'>Exemplos</button>
      </Link>
    </div>
  </div>

  {/* Box 3 - Preto, imagem à direita */}
  <div className="boxPreto">
    <div className="boxColuna boxTexto">
      <h2>02. Gestão de Redes Sociais</h2>
      <ul>
        <li>Planejamento de conteúdo estratégico</li>
        <li>Criação de posts criativos</li>
        <li>Legendas que conectam</li>
        <li>Agendamento e organizações</li>
      </ul>
      <Link to="/Projetos?categoria=2">
      <button className='buttonBoxPreto'>Exemplos</button>
      </Link>
    </div>
    <div className="boxColuna boxImagem">
      <img src={GestaoRedes} alt="Serviço 1" />
    </div>
  </div>
  {/* Box 2 - Rosa, imagem à esquerda */}
  <div className="boxRosa">
    <div className="boxColuna boxImagem">
      <img src={CaptacaoImagens} alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>03. Captação de fotos e vídeos</h2>
      <ul>
        <li>Ensaios para marcas e produtos</li>
        <li>Bastidores</li>
        <li>Vídeos institucionais e promocionais</li>
        <li>Ensaios em estúdio ou externos</li>
      </ul>
      <Link to="/Projetos?categoria=3">
      <button className='buttonBoxRosa'>Exemplos</button>
      </Link>
    </div>
  </div>

  {/* Box 3 - Preto, imagem à direita */}
  <div className="boxPreto">
    <div className="boxColuna boxTexto">
      <h2>04. Edição de fotos e vídeos</h2>
      <ul>
        <li> Tratamento de imagens</li>
        <li>Montagem de reels e vídeos</li>
        <li>Edição de eventos</li>
        <li>Padrão visual da sua marca</li>
      </ul>
      <Link to="/Projetos?categoria=4">
      <button className='buttonBoxPreto'>Exemplos</button>
      </Link>
    </div>
    <div className="boxColuna boxImagem">
     <img src={Edicao} alt="Serviço 1" />
    </div>
  </div>
  {/* Box 2 - Rosa, imagem à esquerda */}
  <div className="boxRosa">
    <div className="boxColuna boxImagem">
   <img src={TrafegoPago} alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>05. Tráfego Pago</h2>
      <ul>
        <li>Anúncios no Instagram e Facebook</li>
        <li>Campanhas com objetivos claros</li>
        <li>Segmentação do público Ideal</li>
        <li>Relatórios e otimizações</li>
      </ul>
      <Link to="/Projetos?categoria=5">
      <button className='buttonBoxRosa'>Exemplos</button>
      </Link>
    </div>
  </div>

  {/* Box 3 - Preto, imagem à direita */}
  <div className="boxPreto">
    <div className="boxColuna boxTexto">
      <h2>06. Motion Design</h2>
      <ul>
       <li>Animação de logo simples, entre 3 a 10 segundos</li>
       <li>Vídeo para publicidade em motion design</li>
       <li>Animação entre 30 a 60 segundos</li>
      </ul>
      <Link to="/Projetos?categoria=6">
       <button className='buttonBoxPreto'>Exemplos</button>
       </Link>
    </div>
    <div className="boxColuna boxImagem">
   <img src={MotionDesign} alt="Serviço 1" />
    </div>
  </div>

   {/* Box 2 - Rosa, imagem à esquerda */}
  <div className="boxRosa">
    <div className="boxColuna boxImagem">
   <img src={TempoReal} alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>07. Cobertura em Tempo Real</h2>
      <ul>
       <li>Stories durante o evento</li>
       <li>Reels e conteúdo dinâmico</li>
       <li>Posts atualizados no feed</li>
      </ul>
      <Link to="/Projetos?categoria=7">
      <button className='buttonBoxRosa'>Exemplos</button>
      </Link>
    </div>
  </div>

</div>

  );
};

export default Servicos;

