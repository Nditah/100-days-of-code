import React, { useState, useEffect } from "react";
import covidContext from "./covidContext";
import axios from "axios";
import GetWeek from "../helpers/GetWeek";
import GetMonth from "../helpers/GetMonth";
import GetSixMonths from "../helpers/GetSixMonths";

const CovidState = (props) => {
    const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("italy");
  const [week, setWeek] = useState([]);
  const [weekMode, setWeekMode] = useState(true);
  const [month, setMonth] = useState([]);
  const [monthMode, setMonthMode] = useState(false);
  const [sixMonths, setSixMonths] = useState([]);
  const [sixMonthsMode, setSixMonthsMode] = useState(false);
  const [totalDeaths, setTotalDeaths] = useState([]);
  const [newDeaths, setNewDeaths] = useState([]);
  const [newCases, setNewCases] = useState([]);
  const [activeCases, setActiveCases] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [totalCases, setTotalCases] = useState([]);
  const [tests, setTests] = useState([]);
  const [population, setPopulation] = useState('');

  useEffect(() => {
    setWeek(GetWeek());
    setMonth(GetMonth());
    setSixMonths(GetSixMonths());
  }, []);

  useEffect(() => {
    if (monthMode) fetchData(month);
    if (sixMonthsMode) fetchData(sixMonths);
    if (weekMode) fetchData(week);
  }, [month, week, sixMonths]);

  const fetchData = async (dates) => {
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
          setNewCases((data) => [...data, response.data.response[0].cases.new]);
          setActiveCases((data) => [...data, response.data.response[0].cases.active]);
          setRecovered((data) => [...data, response.data.response[0].cases.recovered]);
          setTotalCases((data) => [...data, response.data.response[0].cases.total]);
          setTotalDeaths((data) => [...data, response.data.response[0].deaths.total]);
          setNewDeaths((data) => [...data, response.data.response[0].deaths.new]);
          setTests((data) => [...data, response.data.response[0].tests.total]);
          setPopulation(response.data.response[0].population);
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  };

  return (
    <covidContext.Provider
      value={{
        week,
        setWeek,
        month,
        setMonth,
        sixMonths,
        setSixMonths,
        population,
        country,
        totalDeaths,
        newDeaths,
        tests,
        newCases,
        activeCases,
        recovered,
        totalCases
      }}
    >
      {props.children}
    </covidContext.Provider>
  );
};

export default CovidState;
