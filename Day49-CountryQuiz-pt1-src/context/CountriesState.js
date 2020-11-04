import React, { useState } from "react";
import _ from "underscore";
import countriesContext from "./countriesContext";

const CountriesState = (props) => {
  const [countries, setCountries] = useState([]);
  const [resultsMode, setResultsMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [questionNum, setQuestionNum] = useState(0);
  const arrOptions = [
    questionNum,
    questionNum + 1,
    questionNum + 2,
    questionNum + 3,
  ];
  const [options, setOptions] = useState(_.shuffle(arrOptions));
  const [clicked, setClicked] = useState(false);

  return (
    <countriesContext.Provider
      value={{
        countries,
        clicked,
        setClicked,
        setCountries,
        setLoading,
        resultsMode,
        loading,
        questionNum,
        options,
      }}
    >
      {props.children}
    </countriesContext.Provider>
  );
};

export default CountriesState;
