import React, { Component } from 'react'

export class SelectForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {value: ''};
    }

    handleSubmit(e) {
        alert('Your favorite color is: ' + this.state.value);
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <form className="section" onSubmit={this.handleSubmit}>
                <h2>Select form</h2>
                <label className="label">
                    Pick your favorite flavor: 
                    <select onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default SelectForm
