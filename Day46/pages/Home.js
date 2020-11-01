import React, { useEffect, useContext } from "react";
import TempConverter from "../components/layout/TempConverter";
import WeekForecast from "../components/layout/Forecast/WeekForecast";
import HighlightsDay from "../components/layout/Highlights/HighlightsDay";
import Aside from "../components/layout/Day/Aside";

import WeatherContext from '../context/weather/weatherContext'

const Home = () => {
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    weatherContext.fetchCurrent();
  },[])

  return (
    <div>
      <div className="App">
        <Aside />
        <main className="main-content">
          <header>
            <TempConverter />
          </header>
          <main>
            <WeekForecast />
            <HighlightsDay />
          </main>
        </main>
      </div>
    </div>
  );
};

export default Home;
