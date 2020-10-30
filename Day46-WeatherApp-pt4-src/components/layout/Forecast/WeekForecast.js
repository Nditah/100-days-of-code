import React, { useEffect, useContext } from "react";
import WeatherContext from "../../../context/weather/weatherContext";
import Moment from "react-moment";

const WeekForecast = () => {
  const weatherContext = useContext(WeatherContext);

  const { daily, date } = weatherContext;

  useEffect(() => {
    weatherContext.fetchDaily();
  }, []);

  return (
    <section className="weekForecast">
      {daily.map((day, index) => (
        <div key={index} className={`forecast forecast-${index}`}>
          <h3>
            <h1>
              <Moment format="DD/MM" add={{ days: index + 1 }}>
                {date}
              </Moment>
            </h1>
          </h3>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt=""
          />
          <div>
            <p>{day.temp.max}°F</p>
            <p>{day.temp.min}°F</p>
          </div>
        </div>
      ))}
    </section>

    // <h1>Hello</h1>
  );
};

export default WeekForecast;
