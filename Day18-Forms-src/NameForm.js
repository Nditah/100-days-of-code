import React, { Component } from 'react'

export class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        alert('Hello there, ' + this.state.value)
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
                <form className="section"onSubmit={this.handleSubmit}>
                    <h2>Name Form</h2>
            <label className="label">
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label> 
            <input type="submit" value="Submit"/>
        </form>
        )
    }
}

export default NameForm

