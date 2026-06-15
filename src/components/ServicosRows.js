import React from "react";
import "../styles/ServicosRows.css";

function ServicosRow({ services = [] }) {
  return (
    <div className="servicosRowContainer">
      <h2 className="servicosRowTitle">Os Nossos Serviços</h2>
      <p className="servicosRowSubtitle">
        Descubra o nosso portfólio de serviços criativos
      </p>

      <div className="servicosScroll">
        {services.map((service, index) => (
          <div key={index} className="previewCard">
            <div className="cardIcon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicosRow;
