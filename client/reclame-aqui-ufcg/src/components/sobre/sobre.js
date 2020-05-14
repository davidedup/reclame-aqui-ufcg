import React, { Component } from "react";
import './sobre.css';

class Sobre extends Component {
  render() {
    return (
      <div className="sobreContainer">
        <h1>SOBRE</h1>
        <p style={{textAlign: "justify"}}>
          Plataforma web para que alunos e funcionários da UFCG possam expressar
          suas reclamações sobre a instituição. O intuito e prover informações
          que podem ser úteis para os gestores na solução de problemas da
          instituição. Faz parte da avaliação da disciplina Princípios de
          Desenvolvimento Web (2020.1)
        </p>
      </div>
    );
  }
}

export default Sobre;
