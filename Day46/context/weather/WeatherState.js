import React, { useReducer } from "react";
import axios from "axios";
import WeatherReducer from "./weatherReducer";
import {
  SET_LOADING,
  SET_COORDS,
  GET_WOEID,
  FETCH_CURRENT,
  SEARCH_PLACE,
  SEARCH_MODE,
} from "../types";
import weatherContext from "./weatherContext";

const APIkey = "19afde61c929edf9126d2df948a00924";

const WeatherState = (props) => {
  
  const initialState = {
    loading: false,
    coords: { lat: 50, lon: 14 },
    woeid: 638242,
    current: "",
    placeSearched: "",
    searchMode: false,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // Set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //   Set coords
  const setCoords = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        dispatch({ type: SET_COORDS, payload: { lat: lat, lon: lon } });
      });
    } else {
      dispatch({ type: SET_COORDS, payload: state.coords });
    }
  };

  //   Fetch current
  const fetchCurrent = async () => {
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${state.woeid}/`)
    dispatch({ type: FETCH_CURRENT, payload: res.data.consolidated_weather })
    setLoading();
    
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => dispatch({type: FETCH_CURRENT, payload: json}))

      //   axios
      // .get(
      //   `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${state.woeid}/`
      // )
      // .then((res) => dispatch({ type: FETCH_CURRENT, payload:  res.data.consolidated_weather}));

    

    // axios
    // .get(`http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${APIkey}`)
    // .then((res) => dispatch( {type: FETCH_CURRENT, payload: res.data}))
  };

  // Get woeid

  const getWoeid = () => {
    // axios
    //   .get(
    //     `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api//api/location/search/?lattlong=50,14`
    //   )
    //   .then((res) => dispatch({ type: GET_WOEID, payload: res.data[0].woeid }));

    dispatch({ type: GET_WOEID, payload: "Hello" });
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
        woeid: state.woeid,
        getWoeid,
        current: state.current,
        fetchCurrent,
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
