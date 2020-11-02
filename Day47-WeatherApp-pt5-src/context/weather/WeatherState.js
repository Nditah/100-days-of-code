import React, { useState } from "react";
import weatherContext from "./weatherContext";

const WeatherState = (props) => {
  const [current, setCurrent] = useState({});
  const [woeid, setWoeid] = useState(44418);
  const [coords, setCoords] = useState({ lat: "", lon: "" });
  const [loading, setLoading] = useState(true);
  const [searchMode, setSearchMode] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");
  const [tempUnit, setTempUnit] = useState("C");

  // Set woeid based on geolocation
  function getCoordinates() {
    return new Promise(function (resolve, reject) {
      console.log('get coordinates');
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
  async function getLocation() {
    setLoading(true);
    const position = await getCoordinates();

    setCoords({
      lat: position.coords.latitude.toString(),
      lon: position.coords.longitude.toString(),
    });

    const result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=50,14/`
    );

    const weather = await result.json();
    setWoeid(weather[0].woeid);
    setLoading(false);
  }

  // async function getLocation() {
  // setLoading(true);
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(async (position) => {
  //     await setCoords({
  //       lat: position.coords.latitude,
  //       lon: position.coords.longitude,
  //     });
  //     console.log('coords');
  //   });
  // }
  // const result = await fetch(
  //   `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${coords.lat},${coords.lon}/`
  // );
  // const weather = await result.json();
  // console.log('fetched');

  // setLoading(false);
  // }

  // Set woeid based on searched input
  async function getSearchedWeather() {
    const result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${searchedValue}`
    );
    const weather = await result.json();

    setWoeid(weather[0].woeid);
    setSearchMode(false);
  }

  // Get weather data
  async function getWeather() {
    // setWoeid(woeid);

    const resultWeather = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
    );
    const weather = await resultWeather.json();

    setCurrent(weather);
    setLoading(false);
  }

  // Convert to farenheit
  const converToFarenheit = (el) => {
    return (el * 1.8 + 32).toFixed(1);
  };

  // Format date
  const formatDate = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const el = new Date(date);
    return el.toLocaleDateString("en-US", options);
  };

  return (
    <weatherContext.Provider
      value={{
        current,
        loading,
        searchMode,
        coords,
        tempUnit,
        woeid,
        searchedValue,
        setTempUnit,
        setCoords,
        setSearchMode,
        setLoading,
        setWoeid,
        setCurrent,
        getWeather,
        getLocation,
        setSearchedValue,
        getSearchedWeather,
        converToFarenheit,
        formatDate,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherState;
