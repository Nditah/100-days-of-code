import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import WeatherReducer from "./weatherReducer";
import { SET_LOADING, SET_COORDS, FETCH_CURRENT } from "../types";
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
    current: {}
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

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
    .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${state.coords.lat}&lon=${state.coords.lon}&exclude=minutely,hourly,daily,alerts&appid=${APIkey}`)
    .then((res) => dispatch({ type: FETCH_CURRENT, payload: res.data}))
}

  return (
    <weatherContext.Provider
      value={{
        loading: state.loading,
        setLoading,
        coords: state.coords,
        setCoords,
        current: state.current,
        fetchCurrent
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherState;
