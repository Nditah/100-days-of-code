import React, { useContext } from "react";
import CovidContext from "../../context/covidContext";

const Country = () => {
  const covidContext = useContext(CovidContext);

  const { country, population } = covidContext;
  return (
    <div className="country">
      <h1>{country.charAt(0).toUpperCase() + country.slice(1)}</h1>
      <p className="population">
        Total population:{" "}
        {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
    </div>
  );
};

export default Country;
