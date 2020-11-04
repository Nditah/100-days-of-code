import React, { useState, useEffect, useContext } from "react";
import _ from "underscore";
import adventureImg from "../../../assets/undraw_adventure_4hum 1.svg";
import undrawWinners from "../../../assets/undraw_winners_ao2o 2.svg";
import "./main.css";
import CountriesContext from "../../../context/countriesContext";

const Main = () => {
  const countriesContext = useContext(CountriesContext);

  const {
    options,
    countries,
    loading,
    resultsMode,
    questionNum,
  } = countriesContext;

  const handleClick = (e) => {
    countriesContext.setClicked(true);

    // Click on option
    if (e.target.classList.contains("option")) {
      e.target.parentElement.parentElement.classList.add("selected");
      countriesContext.setClicked(false);
      if (e.target.textContent === countries[questionNum].name) {
        console.log("correct, clicked on option");
        setTimeout(() => {
          e.target.parentElement.parentElement.classList.add("correct");
        }, 3000);
      } else {
        console.log("incorrect, clicked on option");
        // e.target.parentElement.parentElement.classList.add('selected')
        setTimeout(() => {
          e.target.parentElement.parentElement.classList.add("incorrect");
        }, 3000);
      }
    }

    // Click on letter
    if (e.target.classList.contains("letter")) {
      e.target.parentElement.parentElement.classList.add("selected");
      countriesContext.setClicked(false);
      if (e.target.nextSibling.textContent === countries[questionNum].name) {
        console.log("correct, clicked on letter");
        setTimeout(() => {
          e.target.parentElement.parentElement.classList.add("correct");
        });
      } else {
        console.log("incorrect, clicked on letter");
        // e.target.parentElement.parentElement.classList.add('selected')
        setTimeout(() => {
          e.target.parentElement.parentElement.classList.add("incorrect");
        });
      }
    }

    // Click on div
    if (e.target.classList.contains("choice")) {
      e.target.classList.add("selected");
      countriesContext.setClicked(false);
      if (
        e.target.children[0].children[1].textContent ==
        countries[questionNum].name
      ) {
        console.log("correct, clicked on div");

        setTimeout(() => {
          e.target.classList.add("correct");
        });
      } else {
        console.log("incorrect, clicked on div");
        // e.target.classList.add('selected')
        setTimeout(() => {
          e.target.classList.add("incorrect");
        });
      }
    }
  };

  return (
    <div className="main">
      <img className="adventureImg" src={adventureImg} alt="adventure" />

      <header>
        <h1 className="header">Country Quiz</h1>
      </header>

      {
        /* Nomal mode */
        !loading ? (
          !resultsMode ? (
            <main className="card card-questions">
              <h3 className="question">
                {countries[questionNum].capital} is the capital of
              </h3>
              <div
                onClick={(e) => handleClick(e)}
                className="choice choice-A hover"
              >
                <div className="left">
                  <span className="letter">A</span>
                  <span className="option">{countries[options[0]].name}</span>
                </div>
              </div>
              <div
                onClick={(e) => handleClick(e)}
                className="choice choice-B hover"
              >
                <div className="left">
                  <span className="letter">B</span>
                  <span className="option">{countries[options[1]].name}</span>
                </div>
                {/* <span className="material-icons">highlight_off</span> */}
              </div>
              <div
                onClick={(e) => handleClick(e)}
                className="choice choice-C hover"
              >
                <div className="left">
                  <span className="letter">C</span>
                  <span className="option">{countries[options[2]].name}</span>
                </div>
                {/* <span className="material-icons">check_circle_outline</span> */}
              </div>
              <div
                onClick={(e) => handleClick(e)}
                className="choice choice-D hover"
              >
                <div className="left">
                  <span className="letter">D</span>
                  <span className="option">{countries[options[3]].name}</span>
                </div>
              </div>

              {/* <footer>
                <button className="btn nextBtn hover">Next</button>
              </footer> */}
            </main>
          ) : (
            // Results mode
            <main className="card card-results">
              <img src={undrawWinners} alt="undraw-winners" />
              <div className="results">
                <h1>Results</h1>
                <p>
                  You got <span className="correctNum">4</span> correct answers{" "}
                </p>
              </div>
              <button className="btn tryAgainBtn hover">Try again</button>
            </main>
          )
        ) : (
          <h1>Loading</h1>
        )
      }
    </div>
  );
};

export default Main;
