import React, {useContext } from "react";
import CovidContext from '../../context/covidContext';
import './switchMode.css'

const SwitchMode = () => {
    const covidContext = useContext(CovidContext); 

    const { selectedMode } = covidContext;

    function handleChange(e) {
        covidContext.setSelectedMode(e.target.value)
      }

  return (
    <div className="switchMode">
      <div>
        <input
          type="radio"
          id="week"
          name="period"
          value="week"
          checked={selectedMode === "week"}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="week">Week</label>
      </div>

      <div>
        <input
          type="radio"
          id="month"
          name="period"
          value="month"
          checked={selectedMode === "month"}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="month">Month</label>
      </div>

      <div>
        <input
          type="radio"
          id="sixMonths"
          name="period"
          value="sixMonths"
          checked={selectedMode === "sixMonths"}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="sixMonths">Six Months</label>
      </div>
    </div>
  );
};

export default SwitchMode;
