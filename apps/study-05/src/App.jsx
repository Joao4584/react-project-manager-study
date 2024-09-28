// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Receita01 from "./pages/Receita01";
import Receita02 from "./pages/Receita02";
import Receita03 from "./pages/Receita03";
import ListaReceitas from "./components/paginacao/Paginacao"
import PageVideos from "./components/videos/PageVideos";
import "./App.css"; // Estilos globais para o site

// Componente principal que junta o Header, Main e Footer
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Receita01" element={<Receita01 />} />
          <Route path="/Receita02" element={<Receita02 />} />
          <Route path="/Receita03" element={<Receita03 />} />
          <Route path="/ListaReceitas" element={<ListaReceitas />} />
          <Route path="/videos" element={<PageVideos />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
