import React, { Fragment, useContext } from "react";
import coronaIcon from "../../assets/coronavirus.svg";
import CovidContext from "../../context/covidContext";
import "./header.css";

const Header = () => {
  const covidContext = useContext(CovidContext);

  const { input } = covidContext;

  return (
    <Fragment>
      <div className="title">
        <img className="icon" src={coronaIcon} alt="corona icon" />
        <h1>
          Covid19<span>Tracker</span>
        </h1>
      </div>
      <form
        onSubmit={(e) => {e.preventDefault(); covidContext.setCountry(input); document.querySelector('.textInput').value=""}}
        className="inputGroup"
      >
        <input
          className="textInput"
          placeholder="&#xF002; Search for a country"
          type="text"
          onChange={(e) => {
            covidContext.setInput(e.target.value);
          }}
        />
        <input type="submit" className="btn submitBtn" value="Search" />
      </form>
    </Fragment>
  );
};

export default Header;
