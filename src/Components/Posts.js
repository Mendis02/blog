import React,{useEffect, useState} from "react";

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

const PostsMain = () => {
    const [post,setPost] = useState([])
    
    useEffect( () => {    
        getDataFromApi()
    }, [])

    const getDataFromApi = () => {
        fetch(API_ENDPOINT)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then((data) => setPost(data))
            // .catch(err => console.error(err));
    }

    return(
        <div>
          {post.map(p => < post id={p.id} title={p.title} intro={p.body}/>)}
        </div>
    )
}

export default PostsMain