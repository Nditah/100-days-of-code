import React, { useContext } from "react";
import "./App.css";
import CovidContext from "../context/covidContext";
import SwitchMode from "../components/switchMode/SwitchMode";
import Header from "../components/header/Header";
import Graphs from '../components/graph/Graphs'

function App() {
  const covidContext = useContext(CovidContext);

  const { loading } = covidContext;

  return (
    <div className="container">
      <Header />
      <SwitchMode />
      <div className="flex">
      </div>
      {loading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : 
        <Graphs />
      }
    </div>
  );
}

export default App;
