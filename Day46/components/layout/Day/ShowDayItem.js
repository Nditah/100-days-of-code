import React, { useContext } from "react";
import WeatherContext from "../../../context/weather/weatherContext";

const ShowDayItem = () => {
  const weatherContext = useContext(WeatherContext);

  const { current, loading } = weatherContext;

  if (loading) {
    return (
      <h1>Loading</h1>
    )
  } else {
    return (
    // <h1>Data</h1>

      ////////////////////////////////////////////////////////////////////////////////////////

      <section className="showDay">
        <div className="clouds">
          <i className="material-icons cloud cloud-top-left">cloud</i>
          <i className="material-icons cloud cloud-top-right">cloud</i>
          <i className="material-icons cloud cloud-bottom-left">cloud</i>
          <i className="material-icons cloud cloud-bottom-right">cloud</i>
        </div>

        <img
          className="icon"
          src={`https://www.metaweather.com/api/static/img/weather/${current[0].weather_state_abbr}.svg`}
          alt=""
        />
        <h1 className="temp">
          {current[0].the_temp}
          <span>°F</span>
        </h1>
        <p className="stateName">{current[0].weather_state_name}</p>
        <p className="date">{`Today - xxx`}</p>
        <p className="city">
          <i className="material-icons">location_on</i>
          xxx
        </p>
      </section>
    );
  }
};

export default ShowDayItem;
