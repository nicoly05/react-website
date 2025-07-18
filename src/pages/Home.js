import React from 'react';
import { Link } from "react-router-dom";
//import BannerImage from "../assets/HomeImage.jpg";
import "../styles/Home.css"


function Home() {
  return (
  <div className="home">
  <div className="backgroundOverlay"></div> {/* <== Overlay com blur */}
  <div className="headerContainer">
    <h1>+ 55 lab</h1>
    <div className="headerContainerButton">
      <Link to="/Servicos"><button>Serviços</button></Link>
      <Link to="/Projetos"><button>Projetos</button></Link>
      <Link to="/SobreNos"><button>Sobre Nós</button></Link>
      <Link to="/Contactos"><button>Contactos</button></Link>
    </div>
  </div>
</div>

  )
}

export default Home;
