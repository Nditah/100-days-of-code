import React, { useContext } from "react";
import "../../Constants/colorVars.css";
import "./search.css";

import JobsContext from "../../Context/jobsContext";

const Search = () => {
  const jobsContext = useContext(JobsContext);

  const { keywordInput, keyword, location } = jobsContext;

  return (
    <div className="search">
      <div className="inputGroup">
        <input
          className="textInput"
          placeholder="Title, companies,expertise or benefits"
          type="text"
          onChange={(e) => jobsContext.setKeywordInput(e.target.value)}
        />
        <button
          onClick={() => {
            jobsContext.setKeyword(keywordInput);
            jobsContext.getData(location, keyword);
            document.querySelector(".textInput").value = "";
          }}
          className="btn submitBtn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Search;
