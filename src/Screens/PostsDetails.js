import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/'

const PostDetails = () => {
    const [postDetails, setPostDetails] = useState({})

    let { id } = useParams();

    useEffect(() => {
        getDataFromApi(id)
    }, [])

    const getDataFromApi = (id) => {
        fetch(API_ENDPOINT + id)
            .then((response) => response.json())
            .then((d) => setPostDetails(d))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Link to="/"> Home </Link>
            <h2>{postDetails?.id}</h2>
            <h1>{postDetails?.title}</h1>
            <p>{postDetails?.body}</p>
        </div>
    )
}

export default PostDetails