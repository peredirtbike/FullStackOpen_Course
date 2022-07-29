import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'






function App() {

  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

    useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const data = response.data
        setCountries(data)
      })
  }, [])

  
  const handleCountryChange = (event) => {
    console.log(event.target.value)
    setSearchCountry(event.target.value)
  }

  const filter = countries.filter(object => {
    return object.name.common.toLowerCase().startsWith(searchCountry.toLowerCase())
  })

  console.log(filter)
  
  return (
    <div>
      Find countries <input value={searchCountry} onChange={handleCountryChange}></input>
      { <ul>
        {filter.map((filter, index)=>
        <div>
          <li key={index+1}>{filter.name.common}</li>
          <img alt='tete' key={index} src={filter.flags.png}></img>
        </div>
        )}
      </ul> }

    </div>
  );
}

export default App;
