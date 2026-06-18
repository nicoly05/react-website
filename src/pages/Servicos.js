import React, { useEffect} from 'react';
import { Link, useSearchParams } from 'react-router-dom';


import '../styles/Servicos.css'; 
import IdentidadeVisual from '../assets/IdVisual.png'; 
import GestaoRedes from '../assets/GestaoRedes.jpg'; 
import CaptacaoImagens from '../assets/CaptacaoImagens.jpg'; 
import Edicao from '../assets/Edicao.jpg'; 
import TrafegoPago from '../assets/TrafegoPago.png'; 
import MotionDesign from '../assets/MotionDesign.png'; 
import TempoReal from '../assets/tempoReal.jpg'; 
import Audiovisual from '../assets/Audiovisual.png'; 
import DesignGrafico from '../assets/DesignGrafico.png'; 

function Servicos(){
  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get('categoria');

  useEffect(() => {
    if (categoriaParam) {
      const element = document.getElementById(`servico-${categoriaParam}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [categoriaParam]);

  return (
    <div className="servicos">
  {/* Box 1 - Título com destaque */}
  <div className="boxTitulo">
    <h1>Os nossos <span>serviços</span></h1>
  </div>

  {/* Box 2 - Rosa, imagem à esquerda */}
 <div className="boxRosa" id="servico-1">
    <div className="boxColuna boxImagem">
      <img src={IdentidadeVisual} alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto center">
      <h2>01. Identidade Visual</h2>
      <ul>
        <li>Logotipo</li>
        <li>Paleta de Cores e Tipografia</li>
        <li>Manual da marca</li>
        <li>Arte para eventos (convites, painéis, brindes)</li>
        <li>Personalização com propósito</li>
        <li>Gerimos a presença online da tua marca de forma estratégica e criativa</li>
        <li>Planeamos conteúdos, criamos narrativas consistentes e mantemos a comunicação com o teu público</li>
      </ul>
      <Link to="/Projetos?categoria=1">
      <button className='buttonBoxRosa'>Exemplos</button>
      </Link>
    </div>
  </div>

  {/* Box 3 - Preto, imagem à direita */}
  <div className="boxPreto" id="servico-2">
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
  <div className="boxRosa" id="servico-3">
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
  <div className="boxPreto" id="servico-4">
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
  <div className="boxRosa" id="servico-5">
    <div className="boxColuna boxImagem">
   <img src={TrafegoPago} alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>05. Tráfego Pago</h2>
      <ul>
        <li>Anúncios na Meta, Google, Tiktok Ads e outros</li>
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
  <div className="boxPreto" id="servico-6">
    <div className="boxColuna boxTexto">
      <h2>06. Motion Design</h2>
      <ul>
       <li>Animação de logo e outros elementos</li>
       <li>Vídeo explicativos</li>
       <li>Grafismos dinâmicos</li>
       <li>Tornamos seu conteúdo mais envolvente</li>
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
  <div className="boxRosa" id="servico-7">
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
   {/* Box 3 - Preto, imagem à direita */}
  <div className="boxPreto" id="servico-8">
    <div className="boxColuna boxTexto">
      <h2>08. Produção Audiovisual</h2>
      <ul>
       <li>Vídeos institucionais, promocionais, sociais e outros formatos</li>
       <li>Captamos momentos, produtos e espaços com olhar cinematográfico e atenção ao detalhe</li>
       <li>Transformamos as imagens em peças de comunicação cativantes</li>
       <li>Cuidamos do ritmo, som, cor e narrativa para dar vida a cada projeto</li>
      </ul>
      <Link to="/Projetos?categoria=8">
       <button className='buttonBoxPreto'>Exemplos</button>
       </Link>
    </div>
    <div className="boxColuna boxImagem">
   <img src={Audiovisual} alt="Serviço 1" />
    </div>
  </div>

   {/* Box 2 - Rosa, imagem à esquerda */}
  <div className="boxRosa" id="servico-9">
    <div className="boxColuna boxImagem">
   <img src={DesignGrafico} alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>09. Design Gráfico</h2>
      <ul>
       <li>Elaboração de grafismos</li>
       <li>Identidade visual</li>
       <li>Propostas criativas que fortalecem a sua marca</li>
      </ul>
      <Link to="/Projetos?categoria=9">
      <button className='buttonBoxRosa'>Exemplos</button>
      </Link>
    </div>
  </div>

</div>

  );
};

export default Servicos;

