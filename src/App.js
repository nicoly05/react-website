import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Simulacao from "./pages/Simulacao.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Simulacao" element={<Simulacao />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
