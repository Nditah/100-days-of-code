import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <nav>
            <div className="container">
            <h1>AddMovies</h1>
    <h3>List of movies: {movies.length}</h3>
            </div>
            
        </nav>
    )
}

export default Nav
