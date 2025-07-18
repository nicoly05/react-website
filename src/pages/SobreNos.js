import React from 'react';
import "../styles/SobreNos.css";
import img1 from '../assets/Metricas.png';
import img2 from '../assets/Metricas.png';
import img3 from '../assets/Metricas.png';
import MetricasImg from '../assets/Metricas.png';

function SobreNos() {
  return(
<div className='sobreNos'>
    <div className="boxTitulo">
    <h1>Conheça a nossa equipa</h1>
    <h2>Pequena descrição sobre a equipa</h2>
  </div>
   <div className="box-imagens">
      <div className="imagem-item">
        <img src={img1} alt="Imagem 1" />
        <h3>Glaucia</h3>
        <p>Founder, CEO, Marketing, Publicidade, Jornalismo e Relações Públicas</p>
      </div>
      <div className="imagem-item">
        <img src={img2} alt="Imagem 2" />
        <h3>Giovanna</h3>
        <p>Founder, CEO, Marketing, Publicidade, Jornalismo e Relações Públicas</p>
      </div>
      <div className="imagem-item">
        <img src={img3} alt="Imagem 3" />
        <h3>Maria Jéssica</h3>
        <p>Design Gráfica</p>
      </div>
    </div>

  {/* Box 2 - Rosa, imagem à esquerda */}
 <div className="boxRosa">
    <div className="boxColuna boxImagem">
      <img src={MetricasImg} alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>Glaucia</h2>
     <p>Descrição sobre a pessoa, experiências e como chegou até a +55 lab</p>
    </div>
  </div>

  {/* Box 3 - Preto, imagem à direita */}
  <div className="boxPreto">
    <div className="boxColuna boxTexto">
      <h2>Giovanna</h2>
      <p>Descrição sobre a pessoa, experiências e como chegou até a +55 lab</p>
    </div>
    <div className="boxColuna boxImagem">
      <img src={MetricasImg} alt="Serviço 1" />
    </div>
  </div>
  {/* Box 2 - Rosa, imagem à esquerda */}
  <div className="boxRosa">
    <div className="boxColuna boxImagem">
      <img src={MetricasImg} alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>Maria Jéssica</h2>
      <p>Descrição sobre a pessoa, experiências e como chegou até a +55 lab</p>
    </div>
  </div>
</div>
  );
};
export default SobreNos;
