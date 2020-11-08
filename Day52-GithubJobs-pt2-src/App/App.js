import React, { useContext } from "react";
import "./App.css";
import "../Constants/colorVars.css";
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import FullTime from "../Components/FullTime/FullTime";
import SearchByLocation from "../Components/SearchByLocation/SearchByLocation";
import DefaultLocations from "../Components/DefaultLocations/DefaultLocations";
import JobsListing from "../Components/JobsListing/JobsListing";

import JobsContext from "../Context/jobsContext";

function App() {
  const jobsContext = useContext(JobsContext);

  const { location } = jobsContext;

  return (
    <div className="App">
      <div className="container">
        <header>
          <Header />
          <Search />
        </header>
        <div className="grid">
          <aside>
            <FullTime />
            <SearchByLocation />
            <DefaultLocations />
          </aside>
          <main>
            <JobsListing />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
