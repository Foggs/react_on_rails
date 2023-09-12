import React, {useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../constants'

function EditPostDetails(){
    const [post, setPost] = useState([])
    const {id}= useParams()
    const [, setLoading]= useState(true)
    const [, setError] = useState(null)
    const navigate = useNavigate()

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

     
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({title: post.title, body: post.body}), 
            })
            if(response.ok) {
                const json = await response.json();
                console.log('Success', json)
                navigate(`/details/${id}`)
            } else {
                throw response   
            }
        } catch (error) {
            console.log("CATCH FETCH ERROR", error);
        }   
        
    };        
                
    

    if(!post){
        return <h2>Loading...</h2>
    }

    return (
        <div className="post-container">
            <h1>Edit Post Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="post-title">Title</label>
                    <br/>
                    <input type="text" id="post-title" value={post.title} onChange={(e)=> setPost({...post, title: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="post-body">Title</label>
                    <br/>
                    <textarea type="text" id="post-body" value={post.body} onChange={(e)=> setPost({...post, body: e.target.value})}/>
                </div>
                <div><button type="submit">Submit</button></div>
            </form>
            {/* <h3>{post.title}</h3>
            <h4>{post.body}</h4>
            <p>{id} ?</p>
            <Link to="/">Back</Link> */}
        </div>
        
    )
}

export default EditPostDetails