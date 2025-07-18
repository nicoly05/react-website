import React from 'react';
import "../styles/SobreNos.css";
import Glaucia from '../assets/Glaucia.jpg';
import Giovanna from '../assets/Giovanna.jpg';
import MariaJessica from '../assets/MariaJessica.JPG';

function SobreNos() {
  return(
<div className='sobreNos'>
    <div className="boxTitulo">
    <h1>Conheça a nossa equipa</h1>
    <h2>Pequena descrição sobre a equipa</h2>
  </div>
   <div className="box-imagens">
      <div className="imagem-item">
        <img src={Glaucia} alt="Imagem 1" />
        <h3>Glaucia</h3>
        <p>Founder, CEO, Marketing, Publicidade, Jornalismo e Relações Públicas</p>
      </div>
      <div className="imagem-item">
        <img src={Giovanna} alt="Imagem 2" />
        <h3>Giovanna</h3>
        <p>Founder, CEO, Marketing, Publicidade, Jornalismo e Relações Públicas</p>
      </div>
      <div className="imagem-item">
        <img src={MariaJessica} alt="Imagem 3" />
        <h3>Maria Jéssica</h3>
        <p>Design Gráfica</p>
      </div>
    </div>

  {/* Box 2 - Rosa, imagem à esquerda */}
 <div className="boxRosa">
    <div className="boxColuna boxImagem">
      <img src={Glaucia} alt="Serviço 1" />
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
      <img src={Giovanna} alt="Serviço 1" />
    </div>
  </div>
  {/* Box 2 - Rosa, imagem à esquerda */}
  <div className="boxRosa">
    <div className="boxColuna boxImagem">
      <img src={MariaJessica} alt="Serviço 1" />
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
