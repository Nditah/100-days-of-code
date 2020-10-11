// import React, { Component } from 'react'
// import { UserConsumer } from './userContex'

// export class ComponentF extends Component {
//     render() {
//         return (
//             <UserConsumer>
//                 {
//                     (username) => {
//                     return <div>Hello, {username}. This is component F.</div> 
//                     }
//                 }
//             </UserConsumer>
//         )
//     }
// }

// export default ComponentF

import React from 'react'
import {UserContext, ChannelContext} from './App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return (
                                    <div>
                                        User context value: {user}. Channel context value: {channel}
                                    </div>
                                )
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
