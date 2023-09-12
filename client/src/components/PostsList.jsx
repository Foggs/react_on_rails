import React, {useEffect, useState} from 'react'
import { API_URL } from '../constants'
import { useParams, useNavigate, Link } from 'react-router-dom'

function PostsList(){
    const [posts, setPosts] = useState([])
    const [, setLoading]= useState(true)
    const [, setError] = useState(null)
    const navigate = useNavigate();

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

    function editPost(id){
        console.log(id)
        navigate(`/details/${id}/edit`)
    }

    
    const deletePost = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            })
            if(response.ok) {
                // const json = await response.json();
                setPosts(posts.filter((post) => post.id !== id))
                // navigate(`/details/${id}`)
            } else {
                throw response   
            }
        } catch (error) {
            console.log("CATCH FETCH ERROR", error);
        }   
        
    };        

    return (
        <main>
            { posts.map( (post) => (
                <div key={post.id} className="post-container">
                    <div>
                        <button onClick={ () => editPost(post.id) }>Edit</button>
                    </div>
                    <div>
                        <h4>{post.userid}</h4>
                        <h4>{post.first_name} {post.last_name}</h4>
                        <p>{post.email}</p>
                        <p>{post.address}</p>
                    </div>
                    <div>
                        <button onClick={ () => deletePost(post.id) }>Delete {post.id}</button>
                    </div>
                    
                </div>
            ))}
        </main>
    )
}

export default PostsList