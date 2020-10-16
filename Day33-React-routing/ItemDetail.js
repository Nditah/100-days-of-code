import React, { useState, useEffect } from 'react'

function ItemDetail({ match }) {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetchItem();
    }, []);
    
    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`);
        const item = await fetchItem.json();

        setItem(item);
    }

    return (
        <div>
            <h1>{item.id}</h1>
            <p>{item.title}</p>
        </div>
    )
}

export default ItemDetail
