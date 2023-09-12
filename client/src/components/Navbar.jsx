import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
   
    
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                
                <li>
                    <Link to="/contact">contact</Link>
                </li>
                <li>
                    <Link to="/posts">Post List</Link>
                </li>
                <li>
                    <Link to="/details">Details</Link>
                </li>
            </ul>
        </nav>


    )
}

export default Navbar