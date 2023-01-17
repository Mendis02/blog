import React, { useEffect, useState } from "react";

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/'

const PostsMain = () => {
    const [post, setPost] = useState([])
   
    useEffect(() => {
        getDataFromApi()
    }, [])

    const getDataFromApi = () => {
        fetch(API_ENDPOINT)
            .then((response) => response.json())
            // .then((data) => console.log(data))
            .then((data) => setPost(data))
            .catch(err => console.error(err));
    }

    return (
        <div>
            {post.map(p =>
                <div key={p.id}>
                    <h1>{p.id}</h1>
                    <h1>{p.title}</h1>
                </div>
            )}
        </div>
    )
}

export default PostsMain