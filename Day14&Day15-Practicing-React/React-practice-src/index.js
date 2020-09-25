import React from "react";
import ReactDOM from "react-dom";
import Increment from "./Increment";
import Counter from "./Counter";
import Onoff from "./Onoff";
import Greeting from "./Greeting";
import index from './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Increment />
    <Counter />
    <Onoff />
    <Greeting isLoggedIn={false} />,
  </React.StrictMode>,
  document.getElementById("root")
);
