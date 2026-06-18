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
      <h3>Unidas pela criatividade e pela paixão pela comunicação. Ambas formadas em Ciências da Comunicação, começámos a explorar o universo digital através da criação de filtros para o Instagram, uma experiência que rapidamente despertou a vontade de ir mais além. Dessa curiosidade nasceu a +55 Lab, um laboratório criativo onde a imaginação se encontra com a estratégia. O que começou como um pequeno projeto experimental tornou-se num local de ideias em constante evolução, dedicado a ajudar marcas e pessoas a comunicarem de forma autêntica, estética e eficaz.  </h3>
    </div>

    <div className="imagemCentralizada">
      <img src={GlauciaJulita} alt="Glaucia Julita" />
    </div>

    <div className="boxTitulo">
      <h3>Hoje, a +55 Lab oferece uma gama completa de serviços que vai muito além: Gestão de redes sociais, Captação e edição de vídeo, Motion design, Tráfego pago e Criação de identidades visuais. Acreditamos que cada projeto é uma oportunidade para criar algo único e é isso que nos move todos os dias. </h3>
    </div>

</div>
  );
};
export default SobreNos;
