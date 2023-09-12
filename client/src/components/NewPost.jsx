import React, {useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../constants'

function NewPost(){
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const {id}= useParams()
    const [, setLoading]= useState(true)
    const [, setError] = useState(null)
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const postData = {title,body}
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(postData), 
            })
            if(response.ok) {
                const {id} = await response.json();
                // console.log('Success', json)
                navigate(`/posts`)
            } else {
                throw response   
            }
        } catch (error) {
            console.log("CATCH FETCH ERROR", error);
        }   
        
    };       

    

    return (
        <div className="post-container">
            <form onSubmit={handleSubmit}>
                <h2>Create New Post</h2>
                <div>
                    <label htmlFor="post-title">Title</label>
                    <br/>
                    <input type="text" id="post-title"  onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="titleInput">Title</label>
                    <br/>
                    <textarea id="bodyInput"  onChange={(e)=> setBody(e.target.value)}/>
                </div>
                <div><button type="submit">Create</button></div>
            </form>
        </div>
        
    )
}

export default NewPost