import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
import Spinner from "../layout/Spinner";

const Repos = ({ repos, loading }) => {
  if (loading) return <Spinner />;

  return repos.map((repo, index) => <RepoItem key={index} repo={repo} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
