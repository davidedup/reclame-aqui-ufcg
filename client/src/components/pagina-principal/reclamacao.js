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
      isLiked: false,
      isDisliked: false,
      isReported: false,
    };
  }

  like() {
    this.props.like(this.props.dadosReclamacao.id);
    this.setState({ isLiked: true });
  }

  dislike() {
    this.props.dislike(this.props.dadosReclamacao.id);
    this.setState({ isDisliked: true });
  }

  report() {
    this.props.report(this.props.dadosReclamacao.id);
    this.setState({ isReported: true });
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
    const isLiked = this.state.isLiked;
    let likedButton;
    if (isLiked) {
      likedButton = (
        <Button class="btn btn-secondary" style={{ margin: "2px 2px 2px 2px" }}>
          <i className="far fa-thumbs-up"></i>
          <i> {this.props.dadosReclamacao.likes} </i>
        </Button>
      );
    } else {
      likedButton = (
        <Button
          onClick={this.like.bind(this, this.props.id)}
          style={{ margin: "2px 2px 2px 2px" }}
        >
          <i className="far fa-thumbs-up"></i>
          <i> {this.props.dadosReclamacao.likes} </i>
        </Button>
      );
    }

    const isDisliked = this.state.isDisliked;
    let dislikedButton;
    if (isDisliked) {
      dislikedButton = (
        <Button class="btn btn-secondary" style={{ margin: "2px 2px 2px 2px" }}>
          <i className="far fa-thumbs-down"></i>
          <i> {this.props.dadosReclamacao.dislikes}</i>
        </Button>
      );
    } else {
      dislikedButton = (
        <Button
          onClick={this.dislike.bind(this, this.props.id)}
          style={{ margin: "2px 2px 2px 2px" }}
        >
          <i className="far fa-thumbs-down"></i>
          <i> {this.props.dadosReclamacao.dislikes}</i>
        </Button>
      );
    }

    const isReported = this.state.isReported;
    let reportButton;
    if (isReported) {
      reportButton = (
        <Button style={{ margin: "2px 2px 2px 2px" }} class="btn btn-secondary">
          <i className="far fa-flag"></i>
          <i> {this.props.dadosReclamacao.numeroDeDenuncia}</i>
        </Button>
      );
    } else {
      reportButton = (
        <Button
          style={{ margin: "2px 2px 2px 2px" }}
          onClick={this.report.bind(this, this.props.id)}
        >
          <i className="far fa-flag"></i>
          <i> {this.props.dadosReclamacao.numeroDeDenuncia}</i>
        </Button>
      );
    }

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
              {likedButton}
              {dislikedButton}
              {reportButton}
            </p>
          )}
          {!this.props.showButtons && (
            <div>
              <div>
                <i className="far fa-thumbs-up"></i>
                <i> {this.props.dadosReclamacao.likes} </i>
              </div>
              <div>
                <i className="far fa-thumbs-down"></i>
                <i> {this.props.dadosReclamacao.dislikes}</i>
              </div>
              <div>
                <i className="far fa-flag"></i>
                <i> {this.props.dadosReclamacao.numeroDeDenuncia}</i>
              </div>
            </div>
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
