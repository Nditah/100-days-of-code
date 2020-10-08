// WITH HOOKS

import React, { useState } from 'react'
import Mouse from './Mouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <div className="section">
            <h2>Mouse Coords</h2>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <Mouse />}
        </div>
    )
}

export default MouseContainer


// IN CLASS COMPONENTS

// import React, { Component } from 'react'

// export class MouseContainer extends Component {

//     render() {
//         return (
//             <div>
//                 <button>Toggle Component</button>
//             </div>
//         )
//     }
// }

// export default MouseContainer



