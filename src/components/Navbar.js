import React from "react";
import Logo from "../assets/React.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div class="navbar">
      <div className="leftSide">
        <img src={Logo}/>
      </div>
      <div className="rightSide"></div>
      <Link to="/">Home</Link>
      <Link to="/Faturacao">Faturação</Link>
      <Link to="/Requisitos">Requisitos</Link>
      <Link to="/Simulacao">Simulação</Link>
    </div>
  )
}

export default Navbar
