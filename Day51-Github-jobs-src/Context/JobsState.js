import React, { useState, useEffect } from "react";
import { fetchJobsByLocation } from "../Services/fetchJobsByLocation";
import jobsContext from "./jobsContext";

const JobsState = (props) => {
  const [location, setLocation] = useState("NewYork");
  const [jobsListing, setJobsListing] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchJobsByLocation(location);
      setJobsListing(res.data);
    };

    getData();
  }, []);
  

  return (
    <jobsContext.Provider
      value={{
        location,
        jobsListing
      }}
    >
      {props.children}
    </jobsContext.Provider>
  );
};

export default JobsState;
