import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas', number: '644312455' 
    },
    { 
      name: 'Pere Garcia', number: '561232145'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')


  const renderObject = (objects, index) => {
    return objects.map((object, index) => <li key={index}>{object.name} : {object.number}</li>)
  }

  const filtered = persons.filter(person => {
    return person.name.includes(newFilter);
  });

  const renderFilteredObject = (objects, index) => {
    return objects.map((object, index) => <li key={index}>{object.name} : {object.number}</li>)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name : newName,
      number: newNumber
    }
    const isInArray = persons.find(person => {
      if(JSON.stringify(person.name) === JSON.stringify(nameObject.name)){
        console.log(nameObject.name, "está en la lista, por lo tanto no se añade")
          setPersons(persons)
          setNewName('')
          setNewNumber('')
          return true
      } else{
        console.log("se añade")
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
        alert(nameObject.name + " is already added to phonebook")
        return false
      }
    })
   
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
      <form onSubmit={addName}>
        <div>
          <h2>Phone Book</h2>
          filter shown with: <input value={newFilter} onChange={handleFilterChange} /> <br />

        </div>
        <div>
          <h2>Add a new:</h2>
          name: <input value={newName} onChange={handleNameChange} /> <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
          <ul>
            {renderFilteredObject(filtered)}
          </ul>
    </div>
  )
}

export default App