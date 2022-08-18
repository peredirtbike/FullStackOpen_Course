import React from 'react'

const Person = ({name, number, id, handleDelete}) =>
  
<div className="person">
  <span className="person--name">{name}</span>
  <span className="person--number">{number}</span>
  <button className="button" onClick={() => handleDelete(id)}>
  Delete
</button>
</div>



export default Person