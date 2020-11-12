import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import CovidContext from "../../context/covidContext";
import "./graphs.css";

const GraphOne = () => {
  const covidContext = useContext(CovidContext);

  const {
    selectedMode,
    week,
    month,
    sixMonths,
    newDeaths,
    newCases,
  } = covidContext;

  let dateForm;
  if (selectedMode === "week") {
    dateForm = week.map((el) => moment(el).format("MMM D"));
  } else if (selectedMode === "month") {
    dateForm = month.map((el) => moment(el).format("MMM D"));
  } else if (selectedMode === "sixMonths") {
    dateForm = sixMonths.map((el) => moment(el).format("MMM D"));
  }

  const showCases = {
    labels: [...dateForm],
    datasets: [
      {
        label: "# of new cases",
        data: [...newCases],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y-axis-1",
      },
      {
        label: "# of new deaths",
        data: [...newDeaths],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.5)",
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
      <h3>NEW CASES & DEATHS</h3>
      <div
        className="graphOne"
        style={{ width: "100%", height: "auto", margin: "0 auto" }}
      >
        <Line data={showCases} options={options} />
      </div>
    </div>
  );
};

export default GraphOne;
