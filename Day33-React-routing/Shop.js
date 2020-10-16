import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Shop() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        
        const items = await data.json();
        setItems(items);
    }

    return (
        <div>
            <h1>Shop Page</h1>
            {
                items.map(({ id, title}) => (
                    id<6 &&
                <div key={id} 
                     title={title}
                     className="card"
                     >
                    <Link to={`/shop/${id}`} >
                        <h1>{id}</h1>
                    </Link>
                    <p>{title}</p>
                </div>   
                ))
            }
        </div>
    )
}

export default Shop
