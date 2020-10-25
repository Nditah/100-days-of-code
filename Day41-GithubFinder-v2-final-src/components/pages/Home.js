import React, { Fragment } from "react";
import SearchForm from "../layout/SearchForm";
import Users from "../users/Users";

const Home = () => {
  return (
    <Fragment>
      <SearchForm />
      <Users />
    </Fragment>
  );
};

export default Home;
