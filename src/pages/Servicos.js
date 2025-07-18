import React, { useEffect, useState } from 'react';
import mockData from '../data/mockData.json';
import '../styles/Servicos.css'; 
import MetricasImg from '../assets/Metricas.png'; // ajusta o caminho conforme necessário



const Servicos = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(mockData);
  }, []);

  if (!data) return <div>Carregando...</div>;

  return (
    <div className="servicos">
  {/* Box 1 - Título com destaque */}
  <div className="boxTitulo">
    <h1>Os nossos <span>serviços</span></h1>
  </div>

  {/* Box 2 - Rosa, imagem à esquerda */}
  <div className="boxRosa">
    <div className="boxColuna boxImagem">
      <img src="https://via.placeholder.com/150" alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>Título do Serviço</h2>
      <ul>
        <li>Legenda 1</li>
        <li>Legenda 2</li>
        <li>Legenda 3</li>
      </ul>
    </div>
  </div>

  {/* Box 3 - Preto, imagem à direita */}
  <div className="boxPreto">
    <div className="boxColuna boxTexto">
      <h2>Outro Serviço</h2>
      <ul>
        <li>Legenda A</li>
        <li>Legenda B</li>
        <li>Legenda C</li>
      </ul>
    </div>
    <div className="boxColuna boxImagem">
      <img alt="Serviço 2" />
    </div>
  </div>
  {/* Box 2 - Rosa, imagem à esquerda */}
  <div className="boxRosa">
    <div className="boxColuna boxImagem">
      <img src={MetricasImg} alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>Título do Serviço</h2>
      <ul>
        <li>Legenda 1</li>
        <li>Legenda 2</li>
        <li>Legenda 3</li>
      </ul>
    </div>
  </div>

  {/* Box 3 - Preto, imagem à direita */}
  <div className="boxPreto">
    <div className="boxColuna boxTexto">
      <h2>Outro Serviço</h2>
      <ul>
        <li>Legenda A</li>
        <li>Legenda B</li>
        <li>Legenda C</li>
      </ul>
    </div>
    <div className="boxColuna boxImagem">
      <img src="https://via.placeholder.com/150" alt="Serviço 2" />
    </div>
  </div>
  {/* Box 2 - Rosa, imagem à esquerda */}
  <div className="boxRosa">
    <div className="boxColuna boxImagem">
      <img src="https://via.placeholder.com/150" alt="Serviço 1" />
    </div>
    <div className="boxColuna boxTexto">
      <h2>Título do Serviço</h2>
      <ul>
        <li>Legenda 1</li>
        <li>Legenda 2</li>
        <li>Legenda 3</li>
      </ul>
    </div>
  </div>

  {/* Box 3 - Preto, imagem à direita */}
  <div className="boxPreto">
    <div className="boxColuna boxTexto">
      <h2>Outro Serviço</h2>
      <ul>
        <li>Legenda A</li>
        <li>Legenda B</li>
        <li>Legenda C</li>
      </ul>
    </div>
    <div className="boxColuna boxImagem">
      <img src="https://via.placeholder.com/150" alt="Serviço 2" />
    </div>
  </div>
</div>

  );
};

export default Servicos;

