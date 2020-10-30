import React from "react";

const ShowDayItem = ({ current, date }) => {
  return (
    <section className="showDay">
      <div className="clouds">
        <i className="material-icons cloud cloud-top-left">cloud</i>
        <i className="material-icons cloud cloud-top-right">cloud</i>
        <i className="material-icons cloud cloud-bottom-left">cloud</i>
        <i className="material-icons cloud cloud-bottom-right">cloud</i>
      </div>

      <img
        className="icon"
        src={`http://openweathermap.org/img/wn/${current.current.weather[0].icon}@2x.png`}
        alt=""
      />
      <h1 className="temp">
        {current.current.temp}
        <span>°F</span>
      </h1>
      <p className="stateName">{current.current.weather[0].main}</p>
      <p className="date">{`Today - ${date}`}</p>
      <p className="city">
        <i className="material-icons">location_on</i>
        {current.timezone}
      </p>
    </section>
  );
};

export default ShowDayItem;
