import React from "react";
import "./App.css";
import Home from "./pages/Home";
import WeatherState from "./context/weather/WeatherState";

const App = () => {

  return (
    <WeatherState>
      <Home />
    </WeatherState>
  );
};

export default App;
