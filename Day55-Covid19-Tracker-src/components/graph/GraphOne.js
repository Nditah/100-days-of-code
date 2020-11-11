import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import CovidContext from "../../context/covidContext";
import "./graphs.css";

const GraphOne = () => {
  const covidContext = useContext(CovidContext);

  const {
    population,
    country,
    week,
    totalDeaths,
    newDeaths,
    tests,
    newCases,
    activeCases,
    recovered,
    totalCases,
  } = covidContext;

  const weekForm = week.map((el) => moment(el).format("MMM D"));

  const showCases = {
    labels: [...weekForm],
    datasets: [
      {
        label: "# of new cases",
        data: [...newCases],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "# of new deaths",
        data: [...newDeaths],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

  return (
    <div className="graphOne">
      <div className="header">
        <h1 className="title">New Cases - New deaths</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://api-sports.io/documentation/covid-19/v1"
          >
            COVID-19 (1.0.2)
          </a>
        </div>
      </div>
      <div className="graphOne">
        <Line data={showCases} options={options} />
      </div>
    </div>
  );
};

export default GraphOne;
