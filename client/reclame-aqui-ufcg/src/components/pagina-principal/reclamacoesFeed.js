import React, { Component } from "react";
import Reclamacao from "./reclamacao.js";
import ReclamacaoCreator from "./reclamacaoCreator.js";
import Button from "react-bootstrap/Button";
import "./reclamacao.css";
import axios from "axios";

class ReclamacoesFeed extends Component {
  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    this.report = this.report.bind(this);
    this.postaReclamacao = this.postaReclamacao.bind(this); 

    this.state = {
      reclamacoes: [],
    };
  }

  async componentDidMount() {
    const resp = await axios.get("http://localhost:3001/reclamacoes");
    const reclamacoesAux = resp.data;
    this.setState({ reclamacoes: reclamacoesAux });
  }

  like(id) {
    var newState = this.state.reclamacoes;
    newState[id].likes++;
    this.setState({ reclamacoes: newState });
  }

  dislike(id) {
    var newState = this.state.reclamacoes;
    newState[id].dislike++;
    this.setState({ reclamacoes: newState });
  }

  report(id) {
    var newState = this.state.reclamacoes;
    newState[id].reports++;
    this.setState({ reclamacoes: newState });
  }

  async postaReclamacao(reclamacao) {
    reclamacao.id = this.state.reclamacoes.length;
    var newState = this.state.reclamacoes;
    console.log("olá")
    this.setState({ reclamacao: newState.push(reclamacao)});
    console.log("tentou chamar ",  reclamacao)
    return await axios
        .post('http://localhost:3001/reclamacoes', reclamacao, {
          headers: {
            'Content-Type': 'application/json'
          }})
        .then((response) => response)
        .catch((error) => error.response);
  }

  render() {
    return (
      <div>
        <ReclamacaoCreator
          postaReclamacao={this.postaReclamacao}
        ></ReclamacaoCreator>

        <div className="reclamacaoFeedContainer">
          {this.state.reclamacoes.map((reclamacao, i) => {
            return (
              <Reclamacao
                like={this.like}
                dislike={this.dislike}
                report={this.report}
                key={i}
                dadosReclamacao={reclamacao}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ReclamacoesFeed;
