/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function RecipeDropdown() {
  return (
    <div className="dropdown">
      <button>Receitas</button>
      <div className="dropdown-content">
        <Link to="/Receita01">Receita 1</Link>
        <Link to="/Receita02">Receita 2</Link>
        <Link to="/Receita03">Receita 3</Link>
        <Link to="/listaReceitas">Receitas em lista</Link>
        <Link to="/videos">Vídeos de receitas</Link>
      </div>
    </div>
  );
}

export default RecipeDropdown;
