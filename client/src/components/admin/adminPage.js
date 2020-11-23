import React, { Component } from "react";
import Denuncias from "./denuncias.js";
import "./admin.css";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      options: {},
    };
  }

  async componentDidMount() {
    const resp = await axios.get(
      "http://localhost:3001/reclamacoes/grafico-categorias-pessoa"
    );
    console.log(resp.data);
    this.setState({
      series: [{ data: resp.data.series }],
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        colors: ["#335c67", "#FFF3B0", "#E09F3E"],
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: resp.data.categories,
        },
      },
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="adminPageContainer">
        <Denuncias />
        <br></br>
        <h1> Quantidade de cada tipo de usuário </h1>
        <div className="graficoContainer" >
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
            width={800}
          />
        </div>
      </div>
    );
  }
}

export default AdminPage;
