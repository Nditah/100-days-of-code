import React from "react";

const ShowDay = ({ date, state, stateName, temp, city }) => {
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
        src={`https://www.metaweather.com/static/img/weather/${state}.svg`}
        alt=""
      />
      <h1 className="temp">{temp}<span>°C</span></h1>
      <p className="stateName">{stateName}</p>
      <p className="date">Today - {date}</p>
      <p className="city"><i className="material-icons">location_on</i>{city}</p>
    </section>
  );
};

export default ShowDay;
