import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/'

const PostsMain = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getDataFromApi()
    }, [])

    const getDataFromApi = () => {
        fetch(API_ENDPOINT)
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch(err => console.error(err));
    }

    return (
        <div>
            {posts?.map(p =>
                <div key={p.id}>
                    <h1>{p.id}</h1>
                    <Link to={"/" + p.id} >{p.title}</Link>
                </div>
            )}
        </div>
    )
}

export default PostsMain;