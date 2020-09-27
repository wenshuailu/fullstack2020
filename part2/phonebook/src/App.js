import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = (props) => {
  const {filter, handleFilterChange} = props;
  return (
    <div>
      filter shown with <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}

const PersonForm = ({handlers, values}) => {
  const {handleNameChange, handleNumChange, handleSubmit} = handlers;
  const {newName, newNum} = values;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNum} onChange={handleNumChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({persons, newFilter}) => {
  // console.log(persons.filter(p => p.name === 'Ada Lovelace'))
  return (
    <ul>
    {persons 
    && persons
        .filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))
        .map(person => {
        return <li key={person.name}>{person.name} {person.number}</li>
    })}
  </ul>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum] = useState('')
  const [ newFilter, setFilter] = useState('')

  useEffect(()=> {
    console.log('effect');
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log('response')
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  } 
  const handleNumChange = (e) => {
    setNewNum(e.target.value)
  } 

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebooks`)
      return;
    }

    const newPerson = {
      name: newName,
      number: newNum
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNum('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange} />

      <h3>add a new</h3>
      <PersonForm handlers={{handleNameChange, handleNumChange, handleSubmit}}
        values = {{newName, newNum}}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} newFilter={newFilter}/>
      {/* <ul>
        {persons 
        && persons
            .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
            .map(person => {
            return <li key={person.name}>{person.name} {person.number}</li>
        })}
      </ul> */}

    </div>
  )
}

export default App
