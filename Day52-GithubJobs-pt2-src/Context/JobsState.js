import React, { useState, useEffect } from "react";
import jobsContext from "./jobsContext";
import axios from "axios";

const JobsState = (props) => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("london");
  const [keywordInput, setKeywordInput] = useState();
  const [keyword, setKeyword] = useState("");
  const [fullTime, setFullTime] = useState("");
  const [checked, setChecked] = useState(false);
  const [jobsListing, setJobsListing] = useState([]);

  // Get data
  const getData = async () => {
    await axios
      .get(
        `https://jobs.github.com/positions.json?utf8=✓&description=${keyword}&location=${location}${fullTime}`
      )
      .then((res) => {setJobsListing(res.data)})

      setLoading(false)
  };

  useEffect(() => {
    getData(location, keyword);
  }, [[], location, keyword]);

  useEffect(() => {
    (checked === true) ? setFullTime('&full_time=on') : setFullTime('')
  }, [checked])


  return (
    <jobsContext.Provider
      value={{
        location,
        jobsListing,
        keywordInput,
        checked,
        loading,
        setChecked,
        setKeywordInput,
        setLocation,
        setJobsListing,
        setKeyword,
        getData,
      }}
    >
      {props.children}
    </jobsContext.Provider>
  );
};

export default JobsState;
