import React, { useEffect, useState } from "react";
import PostDetails from "./PostsDetails";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
        <Router>
        <div>
            <Link to= "/"> Home </Link>
            {post.map(p =>
                <div key={p.id}>
                    
                    <h1>{p.id}</h1>
                    
                    <Link to={"/"+p.id} >{p.title}</Link> 
                </div>
            )}

        </div>
        </Router>
    )
}

export default PostsMain