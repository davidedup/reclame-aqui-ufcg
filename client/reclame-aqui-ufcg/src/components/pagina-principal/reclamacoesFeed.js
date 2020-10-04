import React, { Component } from "react";
import Reclamacao from "./reclamacao.js";
import ReclamacaoCreator from "./reclamacaoCreator.js";
import "./reclamacao.css";

class ReclamacoesFeed extends Component {
  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    this.report = this.report.bind(this);
    this.postaReclamacao = this.postaReclamacao.bind(this);
    this.state = {
      reclamacoes: [
        {
          id: 0,
          userName: "David",
          titulo: "Ar condicionado ruim",
          texto:
            "O ar condicionado do LCC3 está fazendo um barulho muito grande. Não da para ouvir o profe",
          likes: 10,
          dislike: 1,
          reports: 10,
          tipoDeUsuario: "professor",
        },
        {
          id: 1,
          userName: "Gabi",
          titulo: "Prova ruim",
          texto:
            "A ultima prova de veotorial tinha assunto do primeiro estagio",
          likes: 5,
          dislike: 0,
          reports: 10,
          tipoDeUsuario: "aluno",
        },
      ],
    };
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

  postaReclamacao(reclamacao) {
    reclamacao.id = this.state.reclamacoes.length
    var newState = this.state.reclamacoes;
    this.setState({ reclamacao: newState.push(reclamacao) });
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
