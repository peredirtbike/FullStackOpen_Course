import React from 'react'
import Person from './Person'

const Content = ({persons, handleDelete}) =>
  <ul>
    {persons.map((person, i) =>
      <Person key={i} name={person.name} number={person.number} id={person.id} handleDelete={handleDelete} />
    )}
  </ul>

export default Content