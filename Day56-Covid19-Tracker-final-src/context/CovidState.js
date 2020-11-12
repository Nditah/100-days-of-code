import React, { useState, useEffect } from "react";
import covidContext from "./covidContext";
import axios from "axios";
import GetWeek from "../helpers/GetWeek";
import GetMonth from "../helpers/GetMonth";
import GetSixMonths from "../helpers/GetSixMonths";

const CovidState = (props) => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("italy");
  // Date
  const [week, setWeek] = useState([]);
  const [month, setMonth] = useState([]);
  const [sixMonths, setSixMonths] = useState([]);
  // Api data
  const [data, setData] = useState([]);
  const [totalDeaths, setTotalDeaths] = useState([]);
  const [newDeaths, setNewDeaths] = useState([]);
  const [newCases, setNewCases] = useState([]);
  const [activeCases, setActiveCases] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [totalCases, setTotalCases] = useState([]);
  const [tests, setTests] = useState([]);
  const [population, setPopulation] = useState("");
  // Input
  const [input, setInput] = useState("");
  // Switch modes
  const [selectedMode, setSelectedMode] = useState("week");

  useEffect(() => {
    setWeek(GetWeek());
    setMonth(GetMonth());
    setSixMonths(GetSixMonths());
  }, []);

  useEffect(() => {
    setData([]);
    setTotalDeaths([]);
    setNewDeaths([]);
    setActiveCases([]);
    setRecovered([]);
    setTotalCases([]);
    setTests([]);
    if (selectedMode === "month") fetchData(month);
    if (selectedMode === "sixMonths") fetchData(sixMonths);
    if (selectedMode === "week") fetchData(week);
  }, [country, month, week, sixMonths, selectedMode]);

  const fetchData = async (dates) => {
    setLoading(true);
    await dates.map((date) => {
      const options = {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/history",
        params: { country: country, day: date },
        headers: {
          "x-rapidapi-key":
            "a537a442aamshca308f680d3e7dap1a9eabjsnc9cafcec6f29",
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then((response) => {
          if (response.data.response[0].length !== 0) {
            setData((data) => [...data, response.data.response[0]]);
            setNewCases((data) => [...data, response.data.response[0].cases.new]);
            setActiveCases((data) => [
              ...data,
              response.data.response[0].cases.active,
            ]);
            setRecovered((data) => [
              ...data,
              response.data.response[0].cases.recovered,
            ]);
            setTotalCases((data) => [
              ...data,
              response.data.response[0].cases.total,
            ]);
            setTotalDeaths((data) => [
              ...data,
              response.data.response[0].deaths.total,
            ]);
            setNewDeaths((data) => [
              ...data,
              response.data.response[0].deaths.new,
            ]);
            setTests((data) => [...data, response.data.response[0].tests.total]);
            setPopulation(response.data.response[0].population);
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <covidContext.Provider
      value={{
        loading,
        week,
        setWeek,
        month,
        setMonth,
        sixMonths,
        setSixMonths,
        population,
        country,
        setCountry,
        data,
        totalDeaths,
        newDeaths,
        tests,
        newCases,
        activeCases,
        recovered,
        totalCases,
        input,
        setInput,
        selectedMode,
        setSelectedMode,
      }}
    >
      {props.children}
    </covidContext.Provider>
  );
};

export default CovidState;
