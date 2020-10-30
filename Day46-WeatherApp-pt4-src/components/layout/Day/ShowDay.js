import React, { useEffect, useContext } from "react";
import ShowDayItem from "./ShowDayItem";

import WeatherContext from "../../../context/weather/weatherContext";

const ShowDay = () => {
  useEffect(() => {
    weatherContext.fetchCurrent();
  }, []);

  const weatherContext = useContext(WeatherContext);

  const { current, date } = weatherContext;

  return <ShowDayItem current={current} date={date} />;
};

export default ShowDay;
