import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SearchForm from './components/layout/SearchForm'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import User from './components/users/User'
import About from './components/pages/About'
import Repos from './components/repos/Repos'
import axios from 'axios'

export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: [],
            user: {},
            repos: [],
            loading: false,
            alert: null
        }
    }

    // Search users
    searchUsers = (text) => {
            this.setState({loading: true});
    
            axios.get
            (`https://api.github.com/search/users?q=${text}&users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
            .then(res => this.setState({ users: res.data.items, loading: false }))
    }

    // Get user
    getUser = (username) => {
        this.setState({loading: true});

        axios.get
        (`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
        .then(res => this.setState({ user: res.data, loading: false}));
    }

    // Get users repos
    getUserRepos = (username) => {
        this.setState({loading: true});

        axios.get
        (`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
        .then(res => this.setState({ repos: res.data, loading: false}));
    }

    // Clear users
    clearUsers = () => {
        this.setState({ users: [], loading: false })
    }

    // Set alert
    setAlert = (msg, type) => {
        this.setState({ alert: { msg, type }});
        
        setTimeout(() => this.setState({ alert: null }), 5000);
    }

    render() {
        const { users, user, loading, repos } = this.state;

        return (
            <div>
                    <Router>
                    <Navbar 
                    title="Github Finder"
                    icon="fab fa-github"
                    />
                    <div className="container">
                        <Alert alert={this.state.alert} />
                                <Switch>
                                <Route 
                                exact
                                path="/"
                                render={props => 
                                    <Fragment>
                                        <SearchForm 
                                        searchUsers={this.searchUsers} 
                                        clearUsers={this.clearUsers}
                                        setAlert={this.setAlert}
                                        showClear={ users.length > 0 ? true : false }
                                        />
                                        <Users
                                        loading={loading} 
                                        users={users}
                                        user={user}
                                        />
                                    </Fragment>
                                }
                                />
                                <Route 
                                exact
                                path="/about"
                                component={About}
                                />
                                <Route
                                exact
                                path="/user/:login"
                                render={props => 
                                    <Fragment>
                                        <User { ...props } getUser={this.getUser} getUserRepos={this.getUserRepos} user={user} repos={repos} loading={loading} />
                                        <Repos { ...props } repos={repos} loading={loading} />
                                    </Fragment>
                                }
                                />

                                </Switch>
                    </div>
                    </Router>  
            </div>
        )
    }
}

export default App

