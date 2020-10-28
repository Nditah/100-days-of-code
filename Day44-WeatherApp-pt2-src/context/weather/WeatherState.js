import React, { useReducer } from "react";
import axios from "axios";
import WeatherReducer from "./weatherReducer";
import { FETCH_SUCCESS, SET_LOADING } from "../types";
import weatherContext from "./weatherContext";

const APIkey = "246caa0b0fce167078cddb1f6e78ab6e";

const WeatherState = (props) => {
  const initialState = {
    loading: false,
    daily: [],
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // Fetch success
  const fetchData = () => {
    setLoading();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=14&exclude={part}&appid=${APIkey}`
      )
      .then((res) =>
        dispatch({
          type: FETCH_SUCCESS,
          payload: res.data
        })
      )
    // .catch(error => dispatch({type: FETCH_ERROR, payload: error}));
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <weatherContext.Provider
      value={{
        daily: state.daily,
        loading: state.loading,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherState;
