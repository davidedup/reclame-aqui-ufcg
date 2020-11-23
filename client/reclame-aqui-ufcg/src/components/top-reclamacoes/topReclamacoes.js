import React, { Component } from "react";
import "./top-reclamacoes.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import Reclamacao from "../pagina-principal/reclamacao.js"

class TopReclamacoes extends Component {
  constructor(props) {
    super(props);
    this.ordenaPorLike = this.ordenaPorDislike.bind(this);
    this.ordenaPorLike = this.ordenaPorDenuncia.bind(this);
    this.ordenaPorLike = this.ordenaPorLike.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      reclamacoes: [],
    };
  }

  async componentDidMount() {
    const resp = await axios.get("http://localhost:3001/reclamacoes");
    const reclamacoesAux = resp.data;
    this.setState({ reclamacoes: reclamacoesAux });
  }

  async ordenaPorLike() {
    const resp = await axios.get(
      "http://localhost:3001/reclamacoes?campo=like"
    );
    const reclamacoesAux = resp.data;
    this.setState({ reclamacoes: reclamacoesAux });
  }

  async ordenaPorDislike() {
    const resp = await axios.get(
      "http://localhost:3001/reclamacoes?campo=dislike"
    );
    const reclamacoesAux = resp.data;
    this.setState({ reclamacoes: reclamacoesAux });
  }

  async ordenaPorDenuncia() {
    const resp = await axios.get(
      "http://localhost:3001/reclamacoes?campo=denuncia"
    );
    const reclamacoesAux = resp.data;
    this.setState({ reclamacoes: reclamacoesAux });
  }

  handleSelect(e) {
    if (e === "ordenaPorLike") {
      this.ordenaPorLike();
    } else if (e === "ordenaPorDislike") {
      this.ordenaPorDislike();
    } else {
      this.ordenaPorDenuncia();
    }
  }

  render() {
    return (
      <div className="topReclamacoes">
        <DropdownButton
          id="dropdown-basic-button"
          title="Ordenar por"
          onSelect={this.handleSelect}
        >
          <Dropdown.Item eventKey="ordenaPorLike">Like</Dropdown.Item>
          <Dropdown.Item eventKey="ordenaPorDislike">Dislike</Dropdown.Item>
          <Dropdown.Item eventKey="ordenaPorDenuncia">Denuncias</Dropdown.Item>
        </DropdownButton>
        {this.state.reclamacoes.map((reclamacao, i) => {
          return (
            <Reclamacao
              like={reclamacao.like}
              dislike={reclamacao.dislike}
              report={reclamacao.report}
              key={reclamacao.id}
              dadosReclamacao={reclamacao}
              showDeleteButton={false}
              showButtons={false}
            />
          );
        })}
      </div>
    );
  }
}

export default TopReclamacoes;
