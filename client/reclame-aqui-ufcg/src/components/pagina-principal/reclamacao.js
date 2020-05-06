import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


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
        <img alt="" src="https://as1.ftcdn.net/jpg/01/81/76/56/500_F_181765661_yNJEm7i1k52QFwGyJxCD901bNu1298Fy.jpg" />
        <h3>{this.props.dadosReclamacao.userName}</h3>
        <h2>{this.props.dadosReclamacao.titulo}</h2>
        <p>
          {this.props.dadosReclamacao.texto}
        </p>
        <button>like</button>
        <button>dislike</button>
        <button>reportar</button>
      </div>
    );
  }
}

export default Reclamacao;