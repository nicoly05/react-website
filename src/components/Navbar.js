import React from "react";
import Logo from "../assets/React.png";

function Navbar() {
  return (
    <div class="navbar">
      <div className="leftSide">
        <img src={Logo} alt=""/>
      </div>
      <div className="rightSide"></div>
    </div>
  )
}

export default Navbar
