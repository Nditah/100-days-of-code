import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import CovidContext from "../../context/covidContext";
import "./graphs.css";

const GraphThree = () => {
  const covidContext = useContext(CovidContext);

  const {
    week,
    tests,
    selectedMode,
    month,
    sixMonths
  } = covidContext;

  let dateForm;
  if (selectedMode === "week") {
    dateForm = week.map((el) => moment(el).format("MMM D"));
  } else if (selectedMode === "month") {
    dateForm = month.map((el) => moment(el).format("MMM D"));
  } else if (selectedMode === "sixMonths") {
    dateForm = sixMonths.map((el) => moment(el).format("MMM D"));
  }

  const data = {
    labels: [...dateForm],
    datasets: [
      {
        label: "# of tests",
        data: [...tests],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 99, 132, 0.8)",
        ]
      },
    ],
  };

  const options = {
    esponsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="graphContainerThree">
      <div className="header" className="graphThree">
        <h3 className="title">TESTS</h3>
      </div>
      <div className="graphThree">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default GraphThree;
