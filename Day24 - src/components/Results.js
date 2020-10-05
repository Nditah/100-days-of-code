import React, { Component } from 'react'
import Result from './Result'

export class Results extends Component {
    render() {
        return (
            <section className="results">
                {this.props.results.map(result => (
                    <Result result={result} />
                ))}
            </section>
        )
    }
}

export default Results
