import { useState } from 'react'


const App = () => {

  const goodHandleClick = () => {
    setGood(good +1)
    setTotal(total +1)
  }

  const neutralHandleClick = () => {
    setNeutral(neutral +1)
    setTotal(total +1)
  }

  const badHandleClick = () => {
    setBad(bad +1)
    setTotal(total +1)
  }
  


  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  
  return (
    <div>
      <h1>Give Feedback</h1>
        <button onClick={goodHandleClick}>Good</button>
        <button onClick={neutralHandleClick}>Neutral</button>
        <button onClick={badHandleClick}>Bad</button>
      <h1>Statistics</h1>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {((1 * good + 0 * neutral + -1* bad)/total)}</p>
      <p>Positive: {good / total * 100} %</p>
    </div>
  )
}

export default App