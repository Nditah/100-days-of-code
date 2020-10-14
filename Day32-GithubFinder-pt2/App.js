import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import SearchForm from './components/layout/SearchForm'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import axios from 'axios'

export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: [],
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
        const { users, loading } = this.state;

        return (
            <div>
                <Navbar 
                title="Github Finder"
                icon="fab fa-github"
                />
                <div className="container">
                <Alert alert={this.state.alert} />
                <SearchForm 
                searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers}
                setAlert={this.setAlert}
                showClear={ users.length > 0 ? true : false }
                />
                <Users
                loading={loading} 
                users={users}
                />
                </div>
            </div>
        )
    }
}

export default App

