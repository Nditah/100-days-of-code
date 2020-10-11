// import React, { Component } from 'react'
// import ComponentF from './ComponentF'
// import UserContex, { UserConsumer } from './userContex'

// export class ComponentE extends Component {

//     render() {
//         return (
//             <div>
//                 Component E context {this.context}
//                 <ComponentF />
//             </div>
//         )
//     }
// }

// ComponentE.contextType = UserContex

// export default ComponentE

import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext} from './App'

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            <ComponentF />
            {user} - {channel}
        </div>
    )
}

export default ComponentE
