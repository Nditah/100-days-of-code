import React from 'react'

function SearchBar() {
    return (
        <div>
            <input type="text" placeholder="Search..."/>
            <br/>
            <input type="checkbox" id="checkbox"/>
            <label htmlFor="checkbox">
                Only show products in stock
            </label>
        </div>
    )
}

export default SearchBar



