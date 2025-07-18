import React, {useState} from "react";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {

  const [openLinks, setOpenLinks]= useState(false)
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  const closeMenu = () => {
    setOpenLinks(false);
  };

  return (
    <div class="navbar">
      <div className="leftSide" id={openLinks? "open": "close"}>
        <img src={Logo} alt="logo"/>
        <div className="hiddenLinks">
        <Link to="/"  onClick={closeMenu}>Home</Link>
      <Link to="/Servicos"  onClick={closeMenu}>Serviços</Link>
      <Link to="/Projetos"  onClick={closeMenu}>Projetos</Link>
      <Link to="/SobreNos"  onClick={closeMenu}>Sobre nós</Link>
      <Link to="/Contactos"  onClick={closeMenu}>Contactos</Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to="/">Home</Link>
     <Link to="/Servicos">Serviços</Link>
      <Link to="/Projetos">Projetos</Link>
      <Link to="/SobreNos">Sobre nós</Link>
      <Link to="/Contactos">Contactos</Link>
      <button onClick={toggleNavbar}>
        <ReorderIcon/>
      </button>
      </div>
    </div>
  )
}

export default Navbar
