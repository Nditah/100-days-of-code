import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ShowDay from "./components/ShowDay";
import HighlightsDay from "./components/HighlightsDay";
import WeekForecast from "./components/WeekForecast";
import Search from "./components/Search";
import Locate from "./components/Locate";
import TempConverter from "./components/TempConverter";

const App = () => {
  const [location, setLocation] = useState("44418");
  // const [days, setDays] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [temp, setTemp] = useState([]);
  const [stateName, setStateName] = useState([]);
  const [date, setDate] = useState([]);
  const [windSpeed, setWindSpeed] = useState([]);
  const [windDirection, setWindDirection] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [visibility, setVisibility] = useState([]);
  const [airPressure, setAirPressure] = useState([]);

  // Geolocation
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        axios
          .get(
            `https://cors-anywhere.herokuapp.com/metaweather.com/api/location/search/?lattlong=${lat},${long}`
          )
          .then((res) => setLocation(res.data[0].woeid.toString()));
      });
    }
  });

  // Fetch data based on current location state
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/metaweather.com/api/location/${location}`
      )
      .then((res) => {
        // setDays([...days, res.data.consolidated_weather]);
        // console.log(days);

        const {
          weather_state_abbr,
          the_temp,
          weather_state_name,
          applicable_date,
          wind_speed,
          wind_direction_compass,
          humidity,
          visibility,
          air_pressure,
        } = res.data.consolidated_weather[0];

        setState(weather_state_abbr);
        setTemp(the_temp.toFixed(1));
        setStateName(weather_state_name);
        setDate(applicable_date);
        setCity(res.data.title);
        setWindSpeed(wind_speed);
        setWindDirection(wind_direction_compass);
        setHumidity(humidity);
        setVisibility(visibility);
        setAirPressure(air_pressure);
      });
  }, [location]);

  return (
    <div className="App">
      <aside className="aside-content">
        <header>
          <Search />
          <Locate />
        </header>
        <ShowDay
          city={city}
          state={state}
          temp={temp}
          stateName={stateName}
          date={date}
        />
      </aside>

      <main className="main-content">
        <header>
          <TempConverter />
        </header>
        <WeekForecast
        // days={days}
        />
        <HighlightsDay
          windSpeed={windSpeed}
          windDirection={windDirection}
          humidity={humidity}
          visibility={visibility}
          airPressure={airPressure}
        />
      </main>
    </div>
  );
};

export default App;
