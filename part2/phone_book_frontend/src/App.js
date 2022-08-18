import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Content from './components/Content'
import PersonForm from './components/PersonForm'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
      personService
        .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
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

          personService
            .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setNewNumber('')
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

  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id);
    const confirmDelete = window.confirm(`Delete ${person.name}?`);
    if (confirmDelete){
      personService.deletePerson(id).then(()=>{
        const filteredPersons = persons.filter((person) => person.id !== id);
        setPersons(filteredPersons);

        // reset filter
      });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
          <Filter value={newFilter} onChange={handleFilterChange} />
          <h2>Add a new:</h2>
          <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
          <ul>
          <Content persons={persons}
          handleDelete={handleDelete} />
          </ul>
    </div>
  )
}

export default App