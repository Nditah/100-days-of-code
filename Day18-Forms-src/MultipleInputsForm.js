import React, { Component } from 'react'

export class MultipleInputsForm extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)

        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <form className="section">
                <h2>Multiple Inputs Form</h2>
                <label className="label">
                    Is going:
                    <input 
                        type="checkbox" 
                        name="isGoing" 
                        onChange={this.handleInputChange}
                        checked={this.state.isGoing}
                    />
                </label>
                <br/>
                <label className="label">
                    Number of guests:
                    <input 
                        type="number" 
                        name="numberOfGuests" 
                        onChange={this.handleInputChange}
                        value={this.state.numberOfGuests}
                    />
                </label>
            </form>
        )
    }
}

export default MultipleInputsForm
