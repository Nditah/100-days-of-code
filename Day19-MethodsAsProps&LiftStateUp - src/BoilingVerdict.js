import React from 'react'

export default function BoilingVerdict(props) {
    if(props.celsius >= 100) {
       return <p>The water would boil.</p>
    } 
    return <p>The water won't boil.</p>
}
