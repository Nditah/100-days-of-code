import React from 'react'
import '../../Constants/colorVars.css'
import './searchByLocation.css'

const SearchByLocation = () => {
    return (
        <div>
            <p className="locationHead">Location</p>
            <input className="locationInput" type="text" placeholder="City, state, zip code or country"/>
        </div>
    )
}

export default SearchByLocation
