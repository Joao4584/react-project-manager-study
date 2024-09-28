// eslint-disable-next-line no-unused-vars
import React from "react";
import ReceitasDropdown from "./ReceitasDropdown";
import { Link } from "react-router-dom";
import "./Header.css"; // Estilos específicos para o Header
import reactLogo from "/src/assets/react.svg";
// Componente Header para o topo da página
function Header() {
  return (
    <header>
      <div className="logo-title">
        <Link to="/" className="back-link">
          <img src={reactLogo} alt="Logo do Site" className="logo" />
        </Link>
        <Link to="/" className="back-link">
          <h1>Receitas Deliciosas</h1>
        </Link>
      </div>
      <nav>
        <ReceitasDropdown />
        {/* <button>Receitas</button> */}
        <button>Sobre</button>
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Header;
