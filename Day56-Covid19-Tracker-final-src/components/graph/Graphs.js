import React, { Fragment, useContext } from "react";
import GraphOne from "../graph/GraphOne";
import GraphTwo from "../graph/GraphTwo";
import GraphThree from "../graph/GraphThree";
import Country from "../country/Country";
import CovidContext from "../../context/covidContext";

const Graphs = () => {
  const covidContext = useContext(CovidContext);

  const { data } = covidContext;

  if (data.length === 0) {
    return <h1>No results found</h1>;
  } else {
    return (
      <Fragment>
          <Country />
        <div className="one">
          <GraphOne />
        </div>
        <div className="two">
          <GraphTwo />
          <GraphThree />
        </div>
      </Fragment>
    );
  }
};

export default Graphs;
