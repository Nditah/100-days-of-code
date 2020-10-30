import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import WeatherReducer from "./weatherReducer";
import {
  SET_LOADING,
  SET_COORDS,
  FETCH_CURRENT,
  FETCH_DAILY,
  GET_DATE,
  SEARCH_PLACE,
  SEARCH_MODE,
} from "../types";
import weatherContext from "./weatherContext";

const APIkey = "19afde61c929edf9126d2df948a00924";

const WeatherState = (props) => {
  const [coords, setCoords] = useState({ lat: 50, lon: 14 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setCoords({ lat: lat, lon: lon });
        setCoordinates();
      });
    }
  });

  const initialState = {
    loading: false,
    coords: coords,
    current: "",
    daily: "",
    date: "",
    placeSearched: "",
    searchMode: false,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // Get date
  const getDate = () => {
    const date = new Date().toLocaleDateString("en-gb", {
      month: "short",
      day: "numeric",
      timeZone: "utc",
    });

    dispatch({ type: GET_DATE, payload: date });
  };

  // Set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //   Set coords
  const setCoordinates = () => {
    dispatch({ type: SET_COORDS, payload: coords });
  };

  //   Fetch current
  const fetchCurrent = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${state.coords.lat}&lon=${state.coords.lon}&exclude=minutely,hourly,daily,alerts&appid=${APIkey}`
      )
      .then((res) => dispatch({ type: FETCH_CURRENT, payload: res.data }));

    // dispatch({ type: FETCH_CURRENT, payload: "Hello" });
  };

  // Fetch daily
  const fetchDaily = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${state.coords.lat}&lon=${state.coords.lon}&exclude=minutely,hourly,current,alerts&appid=${APIkey}`
      )
      .then((res) => {
        const days = res.data.daily.filter(function (el, index) {
          return [1, 2, 3, 4, 5].indexOf(index) != -1;
        });

        dispatch({
          type: FETCH_DAILY,
          payload: days,
        });
      });

    // dispatch({ type: FETCH_DAILY, payload: "Hello" });
  };

  // Set search mode
  const setSearchMode = () => {
    dispatch({ type: SEARCH_MODE, payload: !state.searchMode });
  };

  // Search for places
  const searchPlace = () => {
    // axios
    // .get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`)
    // .then((res) => dispatch({type: SEARCH_PLACE, payload: res.data }))

    dispatch({ type: SEARCH_PLACE, payload: "Hello" });
  };

  return (
    <weatherContext.Provider
      value={{
        loading: state.loading,
        setLoading,
        coords: state.coords,
        setCoords,
        current: state.current,
        fetchCurrent,
        daily: state.daily,
        fetchDaily,
        date: state.date,
        getDate,
        searchMode: state.searchMode,
        setSearchMode,
        placeSearched: state.placeSearched,
        searchPlace,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherState;
