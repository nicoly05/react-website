import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/HomePageImage.png";
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
     <div className="headerContainer" >
            <h1>Sistema de Faturação</h1>
            <p></p>
            <Link to="/Faturacao">
            <button> Consulte sua Faturação</button>
            </Link>
            <Link to="/Requisitos">
            <button> Requisitos necessários</button>
            </Link>
            <Link to="/Simulacao">
            <button> Simule uma Fatura</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
