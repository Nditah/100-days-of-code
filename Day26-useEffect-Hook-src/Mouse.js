// WITH HOOKS

import React, { useState, useEffect } from 'react'

function Mouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMouseMove = e => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMouseMove)

        // Cleanup
        return () => {
            console.log('x');
            window.removeEventListener('mousemove', logMouseMove)
        }
        // RUN EFFECT ONLY ONCE!
    }, [])

    return (
        <div>
            <p>x:{x}</p>
            <p>y:{y}</p>
        </div>
    )
}

export default Mouse

// IN CLASS COMPONENTS

// import React, { Component } from 'react'

// export class Mouse extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              x: 0,
//              y: 0,
//         }
//     }

//     logMouseMove = e => {
//         this.setState({x: e.clientX, y: e.clientY })
//     }

    // Change document title at each render
    // componentDidUpdate() {
    //     document.title = `X: ${this.state.x} Y: ${this.state.y}`
    // }

    // Add event listeners (only once)
    // componentDidMount() {
    //     window.addEventListener('mousemove', this.logMouseMove)
    // }

    // Component clean up
//     componentWillUnmount() {
//         window.removeEventListener('mouseMove', this.logMouseMove)
//     }
    
//     render() {
//         return (
//             <div>
//                 <h2>Mouse Coords</h2>
//                 <p>x: {this.state.x}</p>
//                 <p>y: {this.state.y}</p>
//             </div>
//         )
//     }
// }

// export default Mouse

