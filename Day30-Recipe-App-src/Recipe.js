import React from 'react'
import style from './recipe.module.css'

function Recipe({title, ingredients, image}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                { ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                )) }
            </ul>
            <img className={style.recipeImg} src={image} alt=""/>
        </div>
    )
}

export default Recipe
