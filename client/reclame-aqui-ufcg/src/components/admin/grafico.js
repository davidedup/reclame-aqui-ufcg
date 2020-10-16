import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
// import "./admin.css";

class Grafico extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [21, 22, 10, 28],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },
        colors:  ["#335c67", "#FFF3B0", "#E09F3E", "#9E2A2B"],
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
          categories: ["ensino", "sala", "administrativo", "ar-condicionado"],
          labels: {
            style: {
              colors: ["#000000", "#000000", "#000000", "#000000"],
              fontSize: "12px",
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
          width={600}
        />
      </div>
    );
  }
}

export default Grafico;
