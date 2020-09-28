import React, { Component } from 'react'

export class TextareaForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        }
    }

    handleSubmit(e) {
        alert('Your text is: ' + this.state.value)
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
                <form className="section" onSubmit={this.handleSubmit}>
                    <h2>TextArea Form</h2>
            <label className="label">
                Your text:
                <textarea type="text" value={this.state.value} onChange={this.handleChange}/>
            </label> 
            <input type="submit" value="Submit"/>
        </form>
        )
    }
}

export default TextareaForm

