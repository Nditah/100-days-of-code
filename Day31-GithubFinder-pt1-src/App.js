import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import SearchForm from './components/layout/SearchForm'
import Users from './components/users/Users'
import axios from 'axios'

export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: [],
            loading: false
        }
    }
    
    componentDidMount() {
        this.setState( { loading: true })
        axios.get
        (`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
        .then(res => this.setState({ users: res.data, loading: false }))
    }

    render() {
        return (
            <div>
                <Navbar 
                title="Github Finder"
                icon="fab fa-github"
                />
                <div className="container">
                <SearchForm />
                <Users
                loading={this.state.loading} 
                users={this.state.users}
                />
                </div>
            </div>
        )
    }
}

export default App

