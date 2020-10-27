import React from "react";

const HighlightsDay = ({
  windSpeed,
  windDirection,
  humidity,
  visibility,
  airPressure,
}) => {
  return (
    <>
      <h2 className="header">Today's Highlights</h2>
      <section className="highlightsDay">
        <div className="highlight">
          <p>Wind status</p>
          <h1 className="central">{Math.floor(windSpeed)} mph</h1>
          <p>{windDirection}</p>
        </div>

        <div className="highlight">
          <p>Humidity</p>
          <h1 className="central">{humidity}%</h1>
          <div className="bar">
            <div className="progress" style={{height:"24px", width:`${humidity}%`}}></div>
          </div>
        </div>

        <div className="highlight">
          <p>Visibility</p>
          <h1 className="central">{Math.floor(visibility)} miles</h1>
        </div>

        <div className="highlight">
          <p>Air Pressure</p>
          <h1 className="central">{airPressure} mb</h1>
        </div>
      </section>
    </>
  );
};

export default HighlightsDay;
