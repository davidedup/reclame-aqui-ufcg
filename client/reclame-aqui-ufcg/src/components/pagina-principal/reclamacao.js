import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from 'react-bootstrap/Jumbotron'
import './reclamacao.css';

class Reclamacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div className="ReclamacaoCard">
        <Jumbotron>
          <h3>{this.props.dadosReclamacao.userName}</h3>
          <h2>{this.props.dadosReclamacao.titulo}</h2>
          <p>{this.props.dadosReclamacao.texto}</p>

          <p>
          <Button style={{margin: "2px 2px 2px 2px"}}>like</Button>
          <Button style={{margin: "2px 2px 2px 2px"}}> dislike</Button>
          <Button style={{margin: "2px 2px 2px 2px"}}>reportar</Button>
    
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Reclamacao;
