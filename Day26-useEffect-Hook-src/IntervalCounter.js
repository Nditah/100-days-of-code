// WITH HOOKS

import React, { useState, useEffect } from 'react'

function IntervalCounter() {
    const [count, setCount] = useState(0)

    

    useEffect(() => {
        const tick = () => {
            setCount(count + 1)
        }
        
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    },[count])


    return (
        <div className="section">
            <h2>Interval Counter</h2>
            <p>{count}</p>
        </div>
    )
}

export default IntervalCounter


// IN CLASS COMPONENTS

// import React, { Component } from 'react'

// export class IntervalCounter extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }

//     componentDidMount() {
//         this.interval = setInterval(() => {
//             this.setState({count: this.state.count + 1})
//         }, 2000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }

    
//     render() {
//         return (
//             <div>
//                 <h2>Interval Counter</h2>
//                 <p>{this.state.count}</p>

//             </div>
//         )
//     }
// }

// export default IntervalCounter
