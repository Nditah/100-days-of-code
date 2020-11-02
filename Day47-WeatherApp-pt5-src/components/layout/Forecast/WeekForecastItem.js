import React, { useContext } from "react";
import WeatherContext from "../../../context/weather/weatherContext";

const WeekForecastItem = ({ day, index, tempUnit }) => {
  const weatherContext = useContext(WeatherContext);

  return (
    <div key={index} className={`forecast forecast-${index}`}>
      <h4>
        {new Date() == day.applicable_date
          ? "Tomorrow"
          : weatherContext.formatDate(day.applicable_date)}
      </h4>
      <img
        src={`https://www.metaweather.com/api/static/img/weather/${day.weather_state_abbr}.svg`}
        alt=""
      />
      <div>
        <p>
          {tempUnit === "C"
            ? day.min_temp.toFixed(1)
            : weatherContext.converToFarenheit(day.min_temp.toFixed(1))}
          °{tempUnit}
        </p>
        <p>
          {tempUnit === "C"
            ? day.max_temp.toFixed(1)
            : weatherContext.converToFarenheit(day.max_temp.toFixed(1))}
          °{tempUnit}
        </p>
      </div>
    </div>
  );
};

export default WeekForecastItem;
