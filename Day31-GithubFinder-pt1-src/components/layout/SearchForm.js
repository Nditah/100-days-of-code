import React, { Component } from 'react'
import axios from 'axios'

class SearchForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ''
        }
    }

    componentDidUpdate() {
        axios.get
        (`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
        .then(res => console.log(res.data))
    }
    
    render() {
        return (
            <div>
                <input 
                type="text"
                value={this.state.value}
                onChange={(e) => this.setState({value: e.target.value})}
                />
            </div>
        )
    }
}

export default SearchForm
