import { useState } from 'react'


const App = () => {

  const goodHandleClick = () => {
    setGood(good +1)
    console.log(good)
  }

  const neutralHandleClick = () => {
    setNeutral(neutral +1)
  }

  const badHandleClick = () => {
    setBad(bad +1)
  }

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <button onClick={goodHandleClick}>Good</button>
      <p>{good}</p>
      <button onClick={neutralHandleClick}>Neutral</button>
      <p>{neutral}</p>
      <button onClick={badHandleClick}>Bad</button>
      <p>{bad}</p>
    </div>
  )
}

export default App