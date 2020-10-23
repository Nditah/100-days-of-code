import React, { useState, useContext, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SearchForm from "./components/layout/SearchForm";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import User from "./components/users/User";
import About from "./components/pages/About";
import Repos from "./components/repos/Repos";
import axios from "axios";
import GithubContext from "./context/github/githubContext";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Search users
  const searchUsers = (text) => {
    setLoading(true);

    axios
      .get(
        `https://api.github.com/search/users?q=${text}&users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
      )
      .then((res) => setUsers(res.data.items), setLoading(false));
  };

  // Get user
  const getUser = (username) => {
    setLoading(true);

    axios
      .get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
      )
      .then((res) => setUser(res.data), setLoading(false));
  };

  // Get users repos
  const getUserRepos = (username) => {
    setLoading(true);

    axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
      )
      .then((res) => setRepos(res.data), setLoading(false));
  };

  // Clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    
      <Router>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <SearchForm
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    setAlert={showAlert}
                    showClear={users.length > 0 ? true : false}
                  />
                  <Users loading={loading} users={users} user={user} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <Fragment>
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                  <Repos {...props} repos={repos} loading={loading} />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
  );
};

export default App;
