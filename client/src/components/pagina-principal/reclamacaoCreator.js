import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ReclamacaoCreator extends Component {
  constructor(props) {
    super(props);
    this.handleChangeNome = this.handleChangeNome.bind(this);
    this.handleChangeTitulo = this.handleChangeTitulo.bind(this);
    this.handleChangeReclamacao = this.handleChangeReclamacao.bind(this);
    this.handleChangeTipoDeUsuario = this.handleChangeTipoDeUsuario.bind(this);
    this.handleChangeTags = this.handleChangeTags.bind(this);
    this.state = {
      id: -1,
      nomeUsuario: "",
      titulo: "",
      texto: "",
      tags: [],
      likes: 0,
      dislikes: 0,
      tipoAutor: "",
      denunciada: false,
      numeroDeDenuncia: 0

    };
  }
  postaReclamacao() {
    console.log("posta reclamacao creator")
    this.props.postaReclamacao(this.state);
    this.setState({
      id: -1,
      nomeUsuario: "",
      titulo: "",
      texto: "",
      tags: [],
      likes: 0,
      dislikes: 0,
      tipoAutor: "",
      denunciada: null,
      numeroDeDenuncia: 0
    });
  }

  handleChangeNome(event) {
    this.setState({ nomeUsuario: event.target.value });
  }

  handleChangeTitulo(event) {
    this.setState({ titulo: event.target.value });
  }

  handleChangeReclamacao(event) {
    this.setState({ texto: event.target.value });
  }

  handleChangeTipoDeUsuario(event) {
    console.log("OLÀ")
    this.setState({ tipoAutor: event.target.value });
  }

  handleChangeTags(event) {
    this.setState({ tags: event.target.value.split(",") });
  }

  render() {
    return (
      <div className="reclamacaoCreator">
        <Form>
          <Form.Group controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              onChange={this.handleChangeNome}
              type="name"
              value={this.state.nomeUsuario}
              placeholder="Coloque seu nome aqui"
            />
          </Form.Group>

          <Form.Group controlId="titulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChangeTitulo}
              placeholder="Título da sua reclamação"
              value={this.state.titulo}
            />
          </Form.Group>

          <Form.Group controlId="reclamcao">
            <Form.Label>Reclamação</Form.Label>
            <Form.Control
              as="textarea"
              onChange={this.handleChangeReclamacao}
              rows="2"
              placeholder="Descrição da reclamação"
              value={this.state.texto}
            />
          </Form.Group>

          <Form.Group controlId="tags">
            <Form.Label>tags</Form.Label>
            <Form.Control
              as="textarea"
              onChange={this.handleChangeTags}
              rows="1"
              placeholder="Insira suas tags separadas por virgula (,)"
              value={this.state.tags}
            />
          </Form.Group>

          <Form.Group controlId="tipoDeUsuario">
            <Form.Label>Eu sou:</Form.Label>
            <Form.Control
              as="select"
              onChange={this.handleChangeTipoDeUsuario}
              value={this.state.tipoAutor}
            >
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

          <Button variant="primary" onClick={this.postaReclamacao.bind(this)}>
            Postar
          </Button>
        </Form>
      </div>
    );
  }
}

export default ReclamacaoCreator;
