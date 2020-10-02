import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import personService from './services/persons'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum] = useState('')
  const [ newFilter, setFilter] = useState('')

  useEffect(()=> {
    console.log('effect');

    personService.getAll()
    .then(initialList => {
      setPersons(initialList)
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
    
    const idx = persons.findIndex(p => p.name === newName);

    if (idx !== -1) {
      if(window.confirm(`${newName} is already added, replace the old with a new one?`)){
        const newPerson = {
          name: newName,
          number: newNum
        }

        const tid = persons[idx].id

        personService.update(tid, newPerson)
        .then(() =>{
          console.log(persons);
          const ps = [
            ...persons.slice(0, idx),
            newPerson,
            ...persons.slice(idx + 1)
          ]
          setPersons(ps);
        })
      }
      return;
    }

    const newPerson = {
      name: newName,
      number: newNum
    }

    personService.create(newPerson)
    .then(returnedPerson => {
      // console.log(returnedPerson);
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNum('')
    })
  }


  const removeItem = person => {
    if (window.confirm(`Delete ${person.name}`)) {
      personService.remove(person.id)
      .then(res => {
        console.log(res);
        setPersons(persons.filter(p => p.id !== person.id));
      })
    }
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
      <Persons persons={persons} newFilter={newFilter} removeItem={removeItem}/>
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
