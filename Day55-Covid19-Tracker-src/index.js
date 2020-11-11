import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import CovidState from "./context/CovidState";

ReactDOM.render(
  <React.StrictMode>
    <CovidState>
      <App />
    </CovidState>
  </React.StrictMode>,
  document.getElementById("root")
);
