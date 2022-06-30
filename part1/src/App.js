import { useState } from 'react'

const App = () => {
    const [ counter, setCounter ] = useState(0)
    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    const Button = ({ onClick, text }) => <button onClick={onClick}> {text}</button>
    

    const Display = ({ counter }) => <div>{counter}</div>
    
    
    return (
      <div>
        <Display counter={counter} />
        <Button onClick={increaseByOne} text="plus" />
        <Button onClick={decreaseByOne} text="minus" />
        <Button onClick={setToZero} text="0" />
      </div>
    )
  }

export default App