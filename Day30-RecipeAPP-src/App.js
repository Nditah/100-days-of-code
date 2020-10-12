import React, {useState, useEffect} from 'react'
import Recipe from './Recipe'

const App = () => {
    const APP_ID = "866ca236";
    const APP_KEY = "3ca8424008b6ee54a6fc01006060ab6e";

    const [recipes, setRecipes] = useState([]);
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecepies();
    }, [query]);

    const getRecepies = () => {
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(res=>res.json())
        .then(data=> {
            setRecipes(data.hits)})
    }

    const inputHandler = e => {
        setInput(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        setQuery(input);
        setInput('');
    }

    return (
    <div className="app">
        <form className="search-form" onSubmit={submitHandler}>
            <input 
            className="search-bar" 
            type="text" 
            value={input} 
            onChange={inputHandler}
            />
            <button className="search-button" type="submit">Search</button>
        </form>
        <div className="recipes">
        {recipes.map((recipe, index) => (
            <Recipe 
            key={index}
            title={recipe.recipe.label}
            ingredients={recipe.recipe.ingredientLines}
            image={recipe.recipe.image}
            />
        ))}
        </div>
    </div>
    )
}

export default App





