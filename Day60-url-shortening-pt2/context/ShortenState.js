import React, { useState, useEffect } from "react";
import shortenContext from "./shortenContext";

const ShortenState = (props) => {
  const [input, setInput] = useState("");
  const [valid, setValid] = useState('');

  useEffect(() => {
    console.log("loaded");
  }, []);

  return (
    <shortenContext.Provider
      value={{
        input,
        setInput,
        valid,
        setValid
      }}
    >
      {props.children}
    </shortenContext.Provider>
  );
};

export default ShortenState;
