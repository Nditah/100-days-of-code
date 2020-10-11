// import React, { Component } from 'react'
// import ComponentC from './ComponentC'
// import { UserProvider } from './userContex'

// export class App extends Component {
//     render() {
//         return (
//             <UserProvider value="user">
//                 <ComponentC />
//             </UserProvider>
//         )
//     }
// }

// export default App


import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
    return (
        <div>
            <UserContext.Provider value={"user"}>
                <ChannelContext.Provider value={'channel'}>
                <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default App




