import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./reclamacao.css";

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

  render() {
    return (
      <div className="ReclamacaoCard">
        <Jumbotron>
          <h3>{this.props.dadosReclamacao.userName}</h3>
          <h2>{this.props.dadosReclamacao.titulo}</h2>
          <p>{this.props.dadosReclamacao.texto}</p>

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
              <i> {this.props.dadosReclamacao.dislike}</i>
            </Button>
            <Button
              style={{ margin: "2px 2px 2px 2px" }}
              onClick={this.report.bind(this, this.props.id)}
            >
              <i className="far fa-flag"></i>
              <i> {this.props.dadosReclamacao.reports}</i>
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Reclamacao;
