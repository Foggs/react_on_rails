import React, {useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../constants'

function PostDetails(){
    const [post, setPost] = useState([])
    const {id}= useParams()
    const [, setLoading]= useState(true)
    const [, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if(response.ok) {
                    const json = await response.json();
                    setPost(json)
                } else {
                    throw response   
                }
            } catch (error) {
                console.log("CATCH FETCH ERROR", error);
            } finally {
                setLoading(false)
            }      
        }
        fetchData()
    },[id])

    if(!post){
        return <h2>Loading...</h2>
    }

    return (
        <div className="post-container">
            <h3>{post.title}</h3>
            <h4>{post.body}</h4>
            <p>{id}</p>
            <Link to="/">Back</Link>
        </div>
        
    )
}

export default PostDetails