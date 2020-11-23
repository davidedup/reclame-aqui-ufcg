import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./reclamacao.css";
import axios from "axios";

class Reclamacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  like() {
    this.props.like(this.props.dadosReclamacao.id);
  }

  dislike() {
    this.props.dislike(this.props.dadosReclamacao.id);
  }

  report() {
    this.props.report(this.props.dadosReclamacao.id);
  }

  async delete() {
    console.log("deletando...", this.props.dadosReclamacao.id);
    await axios
      .delete(
        "http://localhost:3001/reclamacoes/" + this.props.dadosReclamacao.id
      )
      .then((response) => response)
      .then(window.location.reload(false))
      .catch((error) => error.response);
  }

  makeStringOfTags() {
    var resp = "";
    this.props.dadosReclamacao.tags.forEach((tag) => {
      resp += "#" + tag + "   ";
    });
    return resp;
  }

  render() {
    return (
      <div className="ReclamacaoCard">
        <Jumbotron>
          <h3>{this.props.dadosReclamacao.nomeUsuario}</h3>
          <h2>{this.props.dadosReclamacao.titulo}</h2>
          <p>{this.props.dadosReclamacao.texto}</p>
          <p>{this.makeStringOfTags()}</p>
          <h5>{this.props.dadosReclamacao.tipoDeUsuario}</h5>
          {this.props.showButtons && (
            <p>
              <Button
                onClick={this.like.bind(this, this.props.id)}
                style={{ margin: "2px 2px 2px 2px" }}
              >
                <i className="far fa-thumbs-up"></i>
                <i> {this.props.dadosReclamacao.likes} </i>
              </Button>
              <Button
                onClick={this.dislike.bind(this, this.props.id)}
                style={{ margin: "2px 2px 2px 2px" }}
              >
                <i className="far fa-thumbs-down"></i>
                <i> {this.props.dadosReclamacao.dislikes}</i>
              </Button>
              <Button
                style={{ margin: "2px 2px 2px 2px" }}
                onClick={this.report.bind(this, this.props.id)}
              >
                <i className="far fa-flag"></i>
                <i> {this.props.dadosReclamacao.numeroDeDenuncia}</i>
              </Button>
            </p>
          )}
          {this.props.showDeleteButton && (
            <Button
              variant="danger"
              onClick={this.delete.bind(this, this.props.id)}
            >
              Deletar
            </Button>
          )}
        </Jumbotron>
      </div>
    );
  }
}

export default Reclamacao;
