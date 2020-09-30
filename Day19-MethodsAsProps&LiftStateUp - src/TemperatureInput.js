import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' }
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input type="text"
                value={temperature}
                onChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

export default TemperatureInput
