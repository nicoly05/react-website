import React, {useState} from "react";
import Logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
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
        <Link to="/" onClick={closeMenu}>
          <img src={Logo} alt="logo"/>
        </Link>
        <div className="hiddenLinks">
        <NavLink to="/"  onClick={closeMenu} className={({isActive})=> isActive? 'active' : ''}>Home</NavLink>
      <NavLink to="/Servicos"  onClick={closeMenu} className={({isActive})=> isActive? 'active' : ''}>Serviços</NavLink>
      <NavLink to="/Projetos"  onClick={closeMenu} className={({isActive})=> isActive? 'active' : ''}>Projetos</NavLink>
      <NavLink to="/SobreNos"  onClick={closeMenu} className={({isActive})=> isActive? 'active' : ''}>Sobre nós</NavLink>
      <NavLink to="/Contactos"  onClick={closeMenu} className={({isActive})=> isActive? 'active' : ''}>Contactos</NavLink>
        </div>
      </div>
      <div className="rightSide">
      <NavLink to="/" className={({isActive})=> isActive? 'active' : ''}>Home</NavLink>
         <NavLink to="/Servicos" className={({isActive})=> isActive? 'active' : ''}>Serviços</NavLink>
      <NavLink to="/Projetos" className={({isActive})=> isActive? 'active' : ''}>Projetos</NavLink>
      <NavLink to="/SobreNos" className={({isActive})=> isActive? 'active' : ''}>Sobre nós</NavLink>
      <NavLink to="/Contactos" className={({isActive})=> isActive? 'active' : ''}>Contactos</NavLink>
      <button onClick={toggleNavbar}>
        <ReorderIcon/>
      </button>
      </div>
    </div>
  )
}

export default Navbar
