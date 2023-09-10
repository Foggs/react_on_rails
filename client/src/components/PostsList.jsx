import React, {useEffect, useState} from 'react'
import { API_URL } from '../constants'

function PostsList(){
    const [posts, setPosts] = useState([])
    const [, setLoading]= useState(true)
    const [, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API_URL);
                if(response.ok) {
                    const json = await response.json();
                    setPosts(json)
                } else {
                    throw response   
                }
            } catch (error) {
                setError(error.message)
                console.log("CATCH FETCH ERROR", error.message);
            } finally {
                setLoading(false)
            }      
        }
        fetchData()
    },[])

    return (
        <div>
            <h3>PostsList</h3>
            <hr />
            { posts.map( (post) => (
                <div key={post.id} className="post-container">
                    <h2>{post.title}</h2>
                    <h3>{post.body}</h3>
                </div>
            ))}
        </div>
    )
}

export default PostsList