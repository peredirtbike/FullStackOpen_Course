import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Pere Garcia'}
  ]) 
  const [newName, setNewName] = useState('')

  const renderListOfUserNames = (names, index) => {
    return names.map(({name}) => <li key={index}>{name}</li>)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      name : newName
    }
    console.log(nameObject.name)
    // if (nameObject.name in persons.name){
    //   console.log("este nombre ya está")
    // }
    const isInArray = persons.filter(person => {
      if(person.name === nameObject.name){
        console.log("Está en la lista")
        setPersons('')
      } return true
    })

    if (isInArray === true) {

    }else{
      console.log(persons)
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
   

  }
  const handleNameChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>
          <ul>
            {renderListOfUserNames(persons)}
          </ul>
        </div>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App