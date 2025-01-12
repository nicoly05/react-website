import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Simulacao from "./pages/Simulacao.js";
import Faturacao from "./pages/Faturacao.js";
import Requisitos from "./pages/Requisitos.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Simulacao" element={<Simulacao />} />
          <Route path="/Faturacao" element={<Faturacao />} />
          <Route path="/Requisitos" element={<Requisitos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
