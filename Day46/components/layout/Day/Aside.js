import React, { useContext } from "react";
import Search from "../Search";
import Locate from "../Locate";
import ShowDay from "../Day/ShowDay";

import WeatherContext from "../../../context/weather/weatherContext";

const Aside = () => {
  const weatherContext = useContext(WeatherContext);

  const { searchMode } = weatherContext;

  if (!searchMode) {
    return (
      <aside className="aside-content">
        <header>
          <Search />
          <Locate />
        </header>
        <main>
          <ShowDay />
        </main>
      </aside>
    );
  } else return <h1>Yes! You're in search mode</h1>;
};

export default Aside;
