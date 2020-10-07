import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('Reg comp render');
        return (
        <p>Regular Component {this.props.name}</p>
        )
    }
}

export default RegComp
