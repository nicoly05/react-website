import React, { useState } from 'react';
import '../styles/Projetos.css'; 
const Projetos = () => {
  const [itens, setItens] = useState([
    { id: 1, name: 'Nome da Empresa', checked: false },
    { id: 2, name: 'Número de Identificação Fiscal -> NIF', checked: false },
    { id: 3, name: 'Inscrição na Autoridade Tributária e Aduaneira', checked: false },
    { id: 4, name: 'Registo Nacional de Pessoas Coletivas -> RNPC', checked: false },
    { id: 5, name: 'Importo sobre o rendimento de pessoas coletivas -> IRC', checked: false },
    { id: 6, name: 'Número de Identificação da Segurança Social -> NISS', checked: false },
    { id: 7, name: 'Atividade Principal da Empresa', checked: false },
    { id: 8, name: 'Natureza Jurídica', checked: false },
    { id: 9, name: 'IBAN', checked: false },
    { id: 10, name: 'Entrega de IVA', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="lista">
      <div className="box">
        <ul>
          {itens.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projetos;
