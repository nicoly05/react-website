import React from 'react';
import "../styles/SobreNos.css";
import GlauciaJulita from '../assets/GlauciaJulita.png';

function SobreNos() {
  return(
<div className='sobreNos'>
    <div className="boxTitulo">
    <h1>Conheça a nossa equipa</h1>
  </div>

    <div className="boxTitulo">
      <h3>Unidas pela criatividade e pela paixão pela comunicação. Ambas formadas</h3>
      <h3> em Ciências da Comunicação, começámos a explorar o universo digital</h3>
      <h3> através da criação de filtros para o Instagram, uma experiência que</h3>
      <h3> rapidamente despertou a vontade de ir mais além. </h3>
      <br></br>
      <h3> Dessa curiosidade nasceu a +55 Lab, um laboratório criativo onde a </h3>
      <h3> imaginação se encontra com a estratégia.</h3>
     <br></br>
      <h3> O que começou como um pequeno projeto experimental tornou-se num local</h3>
      <h3> de ideias em constante evolução, dedicado a ajudar marcas e pessoas a </h3>
      <h3> comunicarem de forma autêntica, estética e eficaz.  </h3>
    </div>

    <div className="imagemCentralizada">
      <img src={GlauciaJulita} alt="Glaucia Julita" />
    </div>

    <div className="boxTitulo">
      <h3>Hoje, a +55 Lab oferece uma gama completa de serviços que vai muito além:</h3> 
      <h3>Gestão de redes sociais, Captação e edição de vídeo, Produção Audiovisual </h3>
      <h3>e Criação de identidades visuais.</h3>
      <br></br>
      <h3> Acreditamos que cada projeto é uma oportunidade para criar algo único e é </h3>
      <h3>isso que nos move todos os dias. </h3>
    </div>

</div>
  );
};
export default SobreNos;
