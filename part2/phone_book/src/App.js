import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Content from './components/Content'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.filter((person) =>
        person.name === newName
    )

    if (person.length !== 0) {
        alert(`${newName} is already added to phonebook`)
    } else {
        const personObject = {
            name: newName,
            number: newNumber
          }
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')

          axios
            .post('http://localhost:3001/persons', personObject)
            .then(response => {
              setPersons(persons.concat(response.data))
              setPersons('')
              alert('number added')
            })
    }
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleFilterChange = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)
  }

  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
          <Filter value={newFilter} onChange={handleFilterChange} />
          <h2>Add a new:</h2>
          <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
          <ul>
          <Content persons={persons} />
          </ul>
    </div>
  )
}

export default App