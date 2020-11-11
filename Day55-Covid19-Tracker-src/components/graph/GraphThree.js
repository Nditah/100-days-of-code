import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import CovidContext from "../../context/covidContext";
import "./graphs.css";

const GraphThree = () => {
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
        label: "# of tests",
        data: [...tests],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    esponsive: true,
    maintainAspectRatio: true,
  };

  return (
    <>
      <div className="header" className="graphThree">
        <h1 className="title">Tests</h1>
      </div>
      <div className="graphThree">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default GraphThree;
