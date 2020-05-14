import React, { Component } from "react";
import Reclamacao from "./reclamacao.js";
import './reclamacao.css'

const reclamacao1 = {
  userName: "David",
  titulo: "Ar condicionado ruim",
  texto:
    "O ar condicionado do LCC3 está fazendo um barulho muito grande. Não da para ouvir o profe",
};
const reclamacao2 = {
  userName: "Gabi",
  titulo: "Prova ruim",
  texto: "A ultima prova de veotorial tinha assunto do primeiro estagio",
};
const reclamacoes = [reclamacao1, reclamacao2];

class ReclamacoesFeed extends Component {
  render() {
    return (
      <div className="reclamacaoFeedContainer">
        {reclamacoes.map((reclamacao) => {
          return <Reclamacao dadosReclamacao={reclamacao} />;
        })}
      </div>
    );
  }
}

export default ReclamacoesFeed;
