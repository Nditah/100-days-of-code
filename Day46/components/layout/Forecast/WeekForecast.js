import React, { useEffect, useContext } from "react";
import WeatherContext from "../../../context/weather/weatherContext";

const WeekForecast = () => {
  const weatherContext = useContext(WeatherContext);

  const { current, loading } = weatherContext;

  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <section className="weekForecast">
        {current.map((day, index) => (
          <div key={index} className={`forecast forecast-${index}`}>
            <h3>{day.applicable_date}</h3>
            <img
              src={`https://www.metaweather.com/api/static/img/weather/${day.weather_state_abbr}.svg`}
              alt=""
            />
            <h1>img</h1>
            <div>
              <p>{day.min_temp}°C</p>
              <p>{day.max_temp}°C</p>
            </div>
          </div>
        ))}
      </section>
    );
  }
};

export default WeekForecast;
