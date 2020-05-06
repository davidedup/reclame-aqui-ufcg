import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Reclamacao extends Component {
  render() {
    return (
      <div className="ReclamacaoCard">
        <img alt="" src="https://as1.ftcdn.net/jpg/01/81/76/56/500_F_181765661_yNJEm7i1k52QFwGyJxCD901bNu1298Fy.jpg" />
        <h3>David Eduardo</h3>
        <p>
          O ar condicionado do LCC3 está fazendo um barulho muito grande. Não da
          para ouvir o profe
        </p>
        <Button variant="primary">Primary</Button>
        <button>like</button>
        <button>dislike</button>
        <button>reportar</button>
      </div>
    );
  }
}

export default Reclamacao;