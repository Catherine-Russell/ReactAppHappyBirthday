import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [day, setDay] = useState(1)
  const [month, setMonth] = useState('')
  const [daysToGo, setDaysToGo] = useState(0)
  const [isNotSubmitted, setIsNotSubmitted] = useState(true)

  const dayMin = 1
  const dayMax = 31

  const today = new Date()
  let birthday;

  const updateDay = event => {
    const birthdayDay = Math.max(dayMin, Math.min(dayMax, Number(event.target.value)))
    setDay(birthdayDay)
  }

  const submit = () => {
    setIsNotSubmitted(false)
    birthday = new Date(`${month.toString()}-${day.toString()}`)
    let daysDifference = Math.ceil((birthday.getTime() - today.getTime()) / (1000 * 3600 * 24)).toFixed(0)
    console.log(daysDifference)
    while (daysDifference < -365) {
      daysDifference = parseInt(daysDifference) + 365
    }
    if (daysDifference >= 0) {
      setDaysToGo(daysDifference)
    } else {
        setDaysToGo(parseInt(daysDifference) + 365)
      }

  }

  return (
    <>
      
    {isNotSubmitted ? (
      <div id='unsubmitted'>

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
          When&apos;s your next birthday?
        </h2>
        <div id="date input">
          <h4>Month:</h4>
          <input id='month' aria-label='month-input' type='month' value={ month } onChange={e => setMonth(e.target.value)}/>
          <h4>Day:</h4>
          <input id="day" aria-label='day-input' type='number' value={ day } onChange={updateDay} />
        </div>
      </div>
      
      <input type="submit" value="Go!" onClick={submit}/>

      </form>
    </div>

) : (
  <div className="card">
    {daysToGo == 0 ? (

      <h1 id='birthday-greeting'>
      Happy Birthday {name}!
    </h1>

      ) : (
        <h1 id='birthday-greeting'>
        Your birthday will be in {daysToGo} days, {name}.
        </h1>
      )}
  </div>

)}
    </>
  )
}

export default App
