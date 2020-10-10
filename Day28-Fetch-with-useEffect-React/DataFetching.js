import React, {useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState('');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [id])

    return (
        <div className="section">
            <input placeholder="Insert post id" type="text" value={id} onChange={e => setId(e.target.value)} />
            <p>{post.title}</p>
            {/* <ul>
                {
                    post.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching