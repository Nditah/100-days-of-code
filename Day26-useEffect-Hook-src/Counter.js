// WITH useEffect HOOK

import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
            console.log('Updating document title');
            document.title = name
            // RUN EFFECT ONLY WHEN NEEDED!
    }, [name])

    return (
        <div className="section">
            <h2>Change Document Title</h2>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <p>You've clicked {count} times</p>
        </div>
    )
}

export default Counter

// WITH CLASS COMPONENTS

// import React, { Component } from 'react'

// export class Counter extends Component {
//     constructor(props) {
//         super(props)
//         this.clickHandler = this.clickHandler.bind(this)
//         this.state = {
//              count: 0,
//              name: ''
//         }
//     }

//     componentDidMount() {
//         document.title = `You've clicked ${this.state.count} times`;
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.count !== this.state.count) {
//             console.log('Updating document title');
//         }

//         document.title = `You've clicked ${this.state.count} times`;
//     }

//     clickHandler() {
//         this.setState({count: this.state.count + 1})
//     }
    
//     render() {
//         return (
//             <div>
//                 <input 
//                 type="text" 
//                 value={this.state.name}
//                 onChange={e => {
//                     this.setState({ name: e.target.value })
//                 }}
//                 />

//                 <button onClick={this.clickHandler}>Click</button>
//                 <p>You've clicked {this.state.count} times</p>
//             </div>
//         )
//     }
// }

// export default Counter
