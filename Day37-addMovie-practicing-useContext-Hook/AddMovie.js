import React, {useState, useContext} from 'react'
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const addName = (e) => {
        setName(e.target.value)
    }

    const addPrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault(); 
        if (name !== '' && price !== '') {
            setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
            setName('')
            setPrice('')
        } else {
            alert('Please insert valid values')
        }
     
    }

    return (
        <form onSubmit={addMovie} className="addMovie container">
            <input placeholder="Enter name" type="text" value={name} onChange={addName} />
            <input placeholder="Enter price" type="number" value={price} onChange={addPrice} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie
