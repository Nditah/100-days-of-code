import React, { Fragment, useContext } from "react";
import WeatherContext from "../../../context/weather/weatherContext";

const HighlightsDay = () => {
  const weatherContext = useContext(WeatherContext);

  const { current } = weatherContext;

  return (
    <Fragment>
      <h2 className="header">Today's Highlights</h2>
      <section className="highlightsDay">
        <div className="highlight">
          <p>Wind Status</p>
          <h1 className="central">{current.current.wind_speed}</h1>
        </div>

        <div className="highlight">
          <p>Humidity</p>
          <h1 className="central">{current.current.humidity}%</h1>
          <div className="bar">
            <div
              className="progress"
              style={{ height: "24px", width: `${current.current.humidity}%` }}
            ></div>
          </div>
        </div>

        <div className="highlight">
          <p>Visibility</p>
          <h1 className="central">{current.current.visibility}</h1>
        </div>

        <div className="highlight">
          <p>Air Pressure</p>
          <h1 className="central">{current.current.pressure} mb</h1>
        </div>
      </section>
    </Fragment>

    // <h1>Hello World</h1>
  );
};

export default HighlightsDay;
