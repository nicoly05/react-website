import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Contactos from "./pages/Contactos.js";
import Servicos from "./pages/Servicos.js";
import SobreNos from "./pages/SobreNos.js";
import Projetos from "./pages/Projetos.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactos" element={<Contactos />} />
          <Route path="/Servicos" element={<Servicos />} />
          <Route path="/SobreNos" element={<SobreNos />} />
           <Route path="/Projetos" element={<Projetos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
