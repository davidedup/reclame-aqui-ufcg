import React, { Component } from "react";
import Reclamacao from "../pagina-principal/reclamacao.js";
import axios from "axios";
// import "./admin.css";

class Denuncias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reclamacoes: [
        
      ],
    };
  }

  async componentDidMount() {
    const resp = await axios.get("http://localhost:3001/reclamacoes");
    const reclamacoesAux = resp.data;
    this.setState({ reclamacoes: reclamacoesAux });
  }

  render() {
    return (
      <div>
        <h1>Reclamações Admin Page</h1>
        {this.state.reclamacoes.map((reclamacao, i) => {
          return (
            <Reclamacao
              like={reclamacao.like}
              dislike={reclamacao.dislike}
              report={reclamacao.report}
              key={reclamacao.id}
              dadosReclamacao={reclamacao}
              showDeleteButton={true}
              showButtons={false}
            />
          );
        })}
      </div>
    );
  }
}

export default Denuncias;
