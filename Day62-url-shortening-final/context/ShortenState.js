import React, { useState } from "react";
import shortenContext from "./shortenContext";

const ShortenState = (props) => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  return (
    <shortenContext.Provider
      value={{
        input,
        setInput,
        loading,
        setLoading,
        results,
        setResults,
      }}
    >
      {props.children}
    </shortenContext.Provider>
  );
};

export default ShortenState;
