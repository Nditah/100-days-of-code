import React from 'react'

function Person(props) {
    return (
        <p>Hi! My name is {props.person.name}, I'm {props.person.age} years old and I'm specialized in {props.person.skill}</p>
    )
}

export default Person
