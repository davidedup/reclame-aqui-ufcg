import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChangeUsuario = this.handleChangeUsuario.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
    this.state = {
        usuario: "",
        senha: "",
    }
  }

  login(){
      if(this.state.usuario == "admin" && this.state.senha == "admin"){
          console.log("logou")
          this.props.history.push('/admin');
      } else {
          alert( "senha e/ou usuario estão errados")
      }
  }

  handleChangeSenha(event) {
    this.setState({ senha: event.target.value });
  }

  handleChangeUsuario(event) {
    this.setState({ usuario: event.target.value });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Usuario administrador</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  onChange={this.handleChangeUsuario}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={this.handleChangeSenha}/>
        </Form.Group>
       
        <Button variant="primary" onClick={this.login.bind(this)}>
          Login
        </Button>
      </Form>
    );
  }
}

export default LoginPage;
