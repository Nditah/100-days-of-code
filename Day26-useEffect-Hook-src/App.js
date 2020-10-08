import React, { Component } from 'react'
import Counter from './Counter'
// import Mouse from './Mouse'
import MouseContainer from './MouseContainer'
import IntervalCounter from './IntervalCounter'

export class App extends Component {
    render() {
        return (
            <>
            <h1>useEffect</h1>
            <Counter />
            {/* <Mouse /> */}
            <MouseContainer />
            <IntervalCounter />
            </>
        )
    }
}

export default App