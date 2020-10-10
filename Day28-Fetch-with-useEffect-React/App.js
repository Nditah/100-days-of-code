import React from 'react'
import DataFetching from './DataFetching'
import DataFetchingButton from './DataFetchingButton'
import Fetch from './Fetch'
import WindowWidth from './WindowWidth'

function App() {
    return (
        <div>
            <h1>Fetching data with useEffect</h1>
            <DataFetching />
            <DataFetchingButton />
            <Fetch />
            <WindowWidth />
        </div>
    )
}

export default App
