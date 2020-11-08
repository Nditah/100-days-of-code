import React, { useContext } from "react";
import JobsContext from "../../Context/jobsContext";

const FullTime = () => {
  const jobsContext = useContext(JobsContext);

  const { checked } = jobsContext;

  return (
    <div className="fullTimeDiv">
      <input
        id="fullTime"
        name="fullTime"
        type="checkbox"
        checked={checked}
        onChange={() => jobsContext.setChecked(!checked)}
      />
      <label htmlFor="location">Full Time</label>
    </div>
  );
};

export default FullTime;
