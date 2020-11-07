import React from "react";
import "../../Constants/colorVars.css";
import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="inputGroup">
        <input
          className="textInput"
          placeholder="Title, companies,expertise or benefits"
          type="text"
        />
        <button className="btn submitBtn">Submit</button>
      </div>
    </div>
  );
};

export default Search;
