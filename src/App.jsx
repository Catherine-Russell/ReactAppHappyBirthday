import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("");


  return (
    <>
      
      <h1>Hello There!</h1>
      <div className="card">
        <h2 id="nameRequest">
          What is your name?
        </h2>
        <input id="name" placeholder="name" value={name} onChange={ event => setName(event.target.value) }/>
        {/* onChange={e => setValue(e.target.value)}  */}
      </div>

      

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
