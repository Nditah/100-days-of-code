import React, { useState } from 'react'

function HookCounter() {
    
    const [count, setCount] = useState(0)

    return (
        <div>
            <h4>Hook Counter One</h4>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
