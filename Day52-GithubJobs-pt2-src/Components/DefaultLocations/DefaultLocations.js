import React from 'react'

const DefaultLocations = () => {
    return (
        <div>
            <div>
                <input type="checkbox" name="defaultOne" id="defaultOne"/>
                <label htmlFor="defaultOne">London</label>
            </div>
            <div>
                <input type="checkbox" name="defaultTwo" id="defaultTwo"/>
                <label htmlFor="defaultOne">Amsterdam</label>
            </div>
            <div>
                <input type="checkbox" name="defaultThree" id="defaultThree"/>
                <label htmlFor="defaultOne">New York</label>
            </div>
            <div>
                <input type="checkbox" name="defaultFour" id="defaultFour"/>
                <label htmlFor="defaultOne">Berlin</label>
            </div>
        </div>
    )
}

export default DefaultLocations
