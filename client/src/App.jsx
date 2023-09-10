import { useState } from 'react'
import PostsList from "./components/PostsList"
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>React on Rails with Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          find this in client/src/App/App.jsx
        </p>
        <PostsList/>
      </div>
     
    </>
  )
}

export default App
