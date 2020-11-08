import React, { useContext } from "react";
import "../../Constants/colorVars.css";
import "./searchByLocation.css";
import JobsContext from "../../Context/jobsContext";

const SearchByLocation = () => {
  const jobsContext = useContext(JobsContext);

  return (
    <div>
      <p className="locationHead">Location</p>
      <input
        className="locationInput"
        type="text"
        placeholder="City, state, zip code or country"
        onChange={e=>jobsContext.setLocation(e.target.value)}
      />
    </div>
  );
};

export default SearchByLocation;
