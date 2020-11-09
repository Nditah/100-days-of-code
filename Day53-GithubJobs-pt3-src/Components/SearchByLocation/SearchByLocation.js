import React, { useContext } from "react";
import "../../Constants/colorVars.css";
import "./searchByLocation.css";
import JobsContext from "../../Context/jobsContext";

const SearchByLocation = () => {
  const jobsContext = useContext(JobsContext);

  const handleChange = (e) => {
    jobsContext.setLoading(true);
    jobsContext.setLocation(e.target.value)
  }

  return (
    <div>
      <p className="locationHead">Location</p>
      <input
        className="locationInput"
        type="text"
        placeholder="City, state, zip code or country"
        onChange={e=>handleChange(e)}
      />
    </div>
  );
};

export default SearchByLocation;
