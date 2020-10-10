import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingButton() {
    const [post, setPost] = useState({});
    const [id, setId] = useState('');
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [idFromButtonClick])


    return (
        <div className="section">
            <input placeholder="Insert post id" type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch post</button>
            <p>{post.title}</p>
        </div>
    )
}

export default DataFetchingButton

