import React, { useContext } from "react";
import ShowDayItem from "./ShowDayItem";

import WeatherContext from "../../../context/weather/weatherContext";

const ShowDay = () => {

  const weatherContext = useContext(WeatherContext);

  const { current } = weatherContext;

  return <ShowDayItem current={current} />;
};

export default ShowDay;
