import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("");
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState('')



  return (
    <>
      
      <h1>Hello There!</h1>

      <form>
      <div className="card">
        <h2 id="name-request">
          What&apos;s your name?
        </h2>
        <input id="name" aria-label="name-input" type="text" placeholder="name" value={name} onChange={ event => setName(event.target.value) }/>
        {/* onChange={e => setValue(e.target.value)}  */}
      </div>

      <div className="card">
        <h2 id="birthday-request">
          When&apos;s your birthday?
        </h2>
        <div id="date input">
          <h4>Day:</h4>
          <input id="day" aria-label='day-input' type='number' value={ day } onChange={e => setDay(e.target.value)} />
          <h4>Month:</h4>
          <input id='month' aria-label='month-input' type='month' value={ month } onChange={e => setMonth(e.target.value)}/>
        </div>
      </div>
      
      <input type="submit" value="Submit" />

      </form>
      

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
