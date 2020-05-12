import React from "react";
import Reclamacao from "./components/pagina-principal/reclamacao.js";
import "./App.css";
import Button from "react-bootstrap/Button";
import NavBar from "./components/navbar/navbar.js";

function App() {
  const reclamacao = {
    userName: "David",
    titulo: "Ar condicionado ruim",
    texto:
      "O ar condicionado do LCC3 está fazendo um barulho muito grande. Não da para ouvir o profe",
  };
  const reclamacao2 = {
    userName: "Gabi",
    titulo: "Prova ruim",
    texto:
      "A ultima prova de veotorial tinha assunto do primeiro estagio",
  };
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="reclamacaoContainer">
        <Reclamacao dadosReclamacao={reclamacao} />
        <Reclamacao dadosReclamacao={reclamacao2} />
      </div>
    </div>
  );
}

export default App;
