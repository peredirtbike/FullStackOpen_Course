import { useState } from 'react'

const App = () => {

    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const handleLeftClick = () =>{
        
    }


  
    return (
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    )
  }

export default App