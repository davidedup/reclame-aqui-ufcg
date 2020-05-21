import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ReclamacaoCreator extends Component {
  constructor(props) {
    super(props);
  }
  postaReclamacao() {
    this.props.postaReclamacao("Objeto chegou falta pegar info do form")
  }

  render() {
    return (
      <div className="reclamacaoCreator">
        <Form>
          
          <Form.Group controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="name" placeholder="Coloque seu nome aqui" />
          </Form.Group>

          <Form.Group controlId="titulo">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" placeholder="Título da sua reclamação" />
          </Form.Group>

          <Form.Group controlId="reclamao">
            <Form.Label>Reclamação</Form.Label>
            <Form.Control as="textarea" rows="2"  placeholder="Descrição da reclamação" />
          </Form.Group>

          <Form.Group controlId="tipoDeUsuario">
            <Form.Label>Eu sou:</Form.Label>
            <Form.Control as="select">
              <option>Professor</option>
              <option>Aluno</option>
              <option>Funcionário</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Minha reclamação não tem conteúdo inapropriado"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.postaReclamacao.bind(this)}>
            Postar
          </Button>
        </Form>
      </div>
    );
  }
}

export default ReclamacaoCreator;
