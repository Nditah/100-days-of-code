import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName:'' , lastName: ''});
    return (
        <div>
            <h4>Hook Counter Three</h4>
            <form>
                <input 
                type="text" 
                value={name.firstName} 
                onChange={e => setName({...name, firstName: e.target.value})}
                />

                <input 
                type="text"
                value={name.lastName}
                onChange={e => setName({...name, lastName: e.target.value})}
                />
                <p>First name is: {name.firstName}</p>
                <p>Last name is: {name.lastName}</p>
            </form>
        </div>
    )
}

export default HookCounterThree
