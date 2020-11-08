import React, { useContext } from "react";
import JobsContext from "../../Context/jobsContext";
import JobsListingItem from "./JobsListingItem";

const JobsListing = () => {
  const jobsContext = useContext(JobsContext);

  const { jobsListing, loading } = jobsContext;

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (!loading) {
    return jobsListing.map((job, index) => <JobsListingItem key={index} job={job} />);
  }
};

export default JobsListing;
