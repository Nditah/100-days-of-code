import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";
import App from "./app/App";
import ShortenState from "./context/ShortenState";

ReactDOM.render(
  <React.StrictMode>
    <ShortenState>
      <App />
    </ShortenState>
  </React.StrictMode>,
  document.getElementById("root")
);
