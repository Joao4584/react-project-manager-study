// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Paginacao.css";

const Receitas = [
  { id: 1, title: "Receita 01", description: "Descrição do Receita 01" },
  { id: 2, title: "Receita 02", description: "Descrição do Receita 02" },
  { id: 3, title: "Receita 03", description: "Descrição do Receita 03" },
  { id: 4, title: "Receita 04", description: "Descrição do Receita 04" },
  { id: 5, title: "Receita 05", description: "Descrição do Receita 05" },
  { id: 6, title: "Receita 06", description: "Descrição do Receita 06" },
  { id: 7, title: "Receita 07", description: "Descrição do Receita 07" },
  { id: 8, title: "Receita 08", description: "Descrição do Receita 08" },
  { id: 9, title: "Receita 09", description: "Descrição do Receita 09" },
  { id: 10, title: "Receita 10", description: "Descrição do Receita 10" },
  { id: 11, title: "Receita 11", description: "Descrição do Receita 11" },
  { id: 12, title: "Receita 12", description: "Descrição do Receita 12" },
  { id: 13, title: "Receita 13", description: "Descrição do Receita 13" },
  { id: 14, title: "Receita 14", description: "Descrição do Receita 14" },
  { id: 15, title: "Receita 15", description: "Descrição do Receita 15" },
  { id: 16, title: "Receita 16", description: "Descrição do Receita 16" },
  { id: 17, title: "Receita 17", description: "Descrição do Receita 17" },
  { id: 18, title: "Receita 18", description: "Descrição do Receita 18" },
  { id: 19, title: "Receita 19", description: "Descrição do Receita 19" },
  { id: 20, title: "Receita 20", description: "Descrição do Receita 20" },
];

const ReceitasPorPagina = 5;

function ListaReceitas() {
  // Quantidade toda / quantidade por pagina
  const [PaginaAtual, setPaginaAtual] = useState(1);
  const TotalPaginas = Math.ceil(Receitas.length / ReceitasPorPagina);
  const index = Receitas.slice(
    (PaginaAtual - 1) * ReceitasPorPagina,
    PaginaAtual * ReceitasPorPagina
  );

  const handleClick = (page) => {
    setPaginaAtual(page);
  };

  return (
    <main className="main-content">
      <section>
        <div id="list" className="list-container">
          <h1>Lista de Receitas</h1>
          <ul className="list bordered-list vertical-line-list">
            {index.map((Receitas) => (
              <li key={Receitas.id}>
                <span>
                  <strong>Nome: </strong>
                  {Receitas.title}
                </span>
                <span>
                  <strong>Descrição: </strong>
                  {Receitas.description}
                </span>
              </li>
            ))}
          </ul>

          <div className="paginacao">
            {Array.from({ length: TotalPaginas }, (_, index) => (
              <button
                key={index}
                className={`page-button ${
                  PaginaAtual === index + 1 ? "active" : ""
                }`}
                onClick={() => handleClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ListaReceitas;
