import React from "react";
import Reclamacao from "./components/pagina-principal/reclamacao.js";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
      <Reclamacao></Reclamacao>
    </div>
  );
}

export default App;
