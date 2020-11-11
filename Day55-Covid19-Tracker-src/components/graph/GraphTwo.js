import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import CovidContext from "../../context/covidContext";
import "./graphs.css";

const GraphTwo = () => {
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

  const data = {
    labels: [...weekForm],
    datasets: [
      {
        label: "# of active cases",
        data: [...activeCases],
        backgroundColor: "rgb(54, 162, 235)",
      },
      {
        label: "# of recovered",
        data: [...recovered],
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const options = {
    esponsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="graphTwo">
      <div className="header">
        <h1 className="title">Active Cases - Recovered</h1>
      </div>
      <div className="graphTwo">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default GraphTwo;
