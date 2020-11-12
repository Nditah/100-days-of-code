import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import CovidContext from "../../context/covidContext";
import "./graphs.css";

const GraphTwo = () => {
  const covidContext = useContext(CovidContext);

  const {
    week,
    activeCases,
    recovered,
    selectedMode,
    month,
    sixMonths,
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
    responsive: true,
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
    <div
      className="graphContainerTwo"
    >
      <div className="header">
        <h3 className="title">ACTIVE CASES & RECOVERED</h3>
      </div>
      <div className="graphTwo" >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default GraphTwo;
