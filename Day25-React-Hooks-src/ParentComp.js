import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Armando'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Armando'
            })
        }, 2000)
    }
    
    render() {
        console.log('Parent comp render');
        return (
            <>
                <p>Parent Component</p>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </>
        )
    }
}

export default ParentComp
