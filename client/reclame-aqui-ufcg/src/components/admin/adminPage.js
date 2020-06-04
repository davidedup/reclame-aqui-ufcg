import React, { Component } from "react";
import Grafico from "./grafico.js";
import Denuncias from "./denuncias.js";
import "./admin.css";


class AdminPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="adminPageContainer">
        <Denuncias />
        <br></br>
        <Grafico />
      </div>
    );
  }
}

export default AdminPage;
