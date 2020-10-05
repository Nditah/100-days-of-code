import React, { Component } from 'react'

export class Result extends Component {
    render() {
        return (
            <div className="result">
                <img src={this.props.result.Poster} alt=""/>
                <h3>{this.props.result.Title}</h3>
            </div>
        )
    }
}

export default Result
