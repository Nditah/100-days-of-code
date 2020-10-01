import React, { Component } from 'react'
import Dialog from './Dialog'

export class SignUpDialog extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        
        this.state = {
             value: ''
        }
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleClick() {
        this.state.value === '' 
        ? alert('Please insert your name')
        : alert(`Welcome aboard, ${this.state.value}!`)
    }
    
    render() {
        return (
            <Dialog
            title="Mars Exploration Program"
            message="How should we refer to you?">
                <input 
                value={this.state.value}
                onChange={this.handleChange}
                />
                <button
                onClick={this.handleClick}
                >Sign Me Up!</button>
            </Dialog>
        )
    }
}

export default SignUpDialog
