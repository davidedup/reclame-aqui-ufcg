import React from "react";
import Reclamacao from "./components/pagina-principal/reclamacao.js";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  const reclamacao = {
    userName: "david",
    titulo: "Ar condicionado ruim",
    texto:
      "O ar condicionado do LCC3 está fazendo um barulho muito grande. Não da para ouvir o profe",
  };
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>{" "}
      <Reclamacao dadosReclamacao={reclamacao} />
    </div>
  );
}

export default App;
