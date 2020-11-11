import React, {useContext} from 'react';
import "./App.css";
import CovidContext from '../context/covidContext'
import GraphOne from "../components/graph/GraphOne";
import GraphTwo from "../components/graph/GraphTwo";
import GraphThree from "../components/graph/GraphThree";

function App() {
  const covidContext = useContext(CovidContext);

  const {country, population} = covidContext;

  return (
    <div className="container">
      <h1 className="title">
          {country.charAt(0).toUpperCase() + country.slice(1)}
        </h1>
        <p>
          Total population:{" "}
          {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      <div className="one">
      <GraphOne />
      </div>
      <div className="two">
        <GraphTwo />
        <GraphThree />
      </div>
    </div>
  );
}

export default App;
