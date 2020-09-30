import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.greetParent = this.greetParent.bind(this)
        this.state = {
             parentName: 'Parent'
        }
    }
    
    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div className="section">
            <h2>Methods as props</h2>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
