import React, { Component } from "react";
import Grafico from "./grafico.js";
import Denuncias from "./denuncias.js";

class AdminPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Denuncias />
        <Grafico />
      </div>
    );
  }
}

export default AdminPage;
