import React, {useContext} from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'


const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div className="container">
            {movies.map(({name, price}, index) => (
                <Movie key={index} name={name} price={`$${price}`} />
            ))}
        </div>
    )
}

export default MovieList

