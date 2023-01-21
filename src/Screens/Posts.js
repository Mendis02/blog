import React, { useEffect, useState } from "react";
<<<<<<< HEAD:src/Screens/Posts.js
import { Link } from "react-router-dom";
=======
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

>>>>>>> master:src/Components/Posts.js

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/'

const PostsMain = () => {
<<<<<<< HEAD:src/Screens/Posts.js
    const [posts, setPosts] = useState([])
=======
    const [post, setPost] = useState([])
>>>>>>> master:src/Components/Posts.js

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
<<<<<<< HEAD:src/Screens/Posts.js
        <div>
            {posts?.map(p =>
                <div key={p.id}>
                    <h1>{p.id}</h1>
                    <Link to={"/" + p.id} >{p.title}</Link>
                </div>
            )}
        </div>
=======
        <Router>
            <div>
                <Link to="/"> Home </Link>
                {post.map(p =>
                    <div key={p.id} className="card">
                        <h2>{p.id}</h2>
                        <Link to={"/" + p.id} className="card-title">{p.title}</Link>
                    </div>
                )}

            </div>
        </Router>
>>>>>>> master:src/Components/Posts.js
    )
}

export default PostsMain;