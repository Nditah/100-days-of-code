import React, { Fragment, useContext  } from "react";
import WeatherContext from "../../../context/weather/weatherContext";

const HighlightsDay = () => {
  const weatherContext = useContext(WeatherContext);

  const { loading, current } = weatherContext;

  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      // <Fragment>
      //   <h2 className="header">Today's Highlights</h2>
      //   <section className="highlightsDay">
      //     <div className="highlight">
      //       <p>Wind Status</p>
      //       <h1 className="central">
      //         {current.weather[0].wind_speed}
      //       </h1>
      //     </div>

      //     <div className="highlight">
      //       <p>Humidity</p>
      //       <h1 className="central">
      //         {current.weather[0].humidity}%
      //       </h1>
      //       <div className="bar">
      //         <div
      //           className="progress"
      //           style={{
      //             height: "24px",
      //             width: `${current.weather[0].humidity}%`,
      //           }}
      //         ></div>
      //       </div>
      //     </div>


      //     <div className="highlight">
      //       <p>Visibility</p>
      //       <h1 className="central">
      //         {current.weather[0].visibility}
      //       </h1>
      //     </div>

      //     <div className="highlight">
      //       <p>Air Pressure</p>
      //       <h1 className="central">
      //         {current.weather[0].air_pressure} mb
      //       </h1>
      //     </div>
      //   </section>
      // </Fragment>

            <h1>Hello</h1>
    );
  }
};

export default HighlightsDay;
