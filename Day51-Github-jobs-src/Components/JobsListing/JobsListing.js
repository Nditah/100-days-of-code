import React, { useContext } from "react";
import JobsContext from "../../Context/jobsContext";
import JobsListingItem from "./JobsListingItem";

const JobsListing = () => {
  const jobsContext = useContext(JobsContext);

  const { jobsListing } = jobsContext;

  return jobsListing.map((job) => (
    <JobsListingItem job={job} />
  )
  );
};

export default JobsListing;
