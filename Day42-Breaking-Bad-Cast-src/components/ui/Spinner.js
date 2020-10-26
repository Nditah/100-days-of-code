import React from "react";
import SpinnerImg from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={SpinnerImg}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt=""
    />
  );
};

export default Spinner;
