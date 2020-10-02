import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('')
	const [showAll, setShowAll] = useState(true)

	useEffect(() => {
		console.log('effect')
		noteService.getAll()
		.then(initialNotes => {
			// console.log('promise fullfilled')
			setNotes(initialNotes)
		})
	}, [])
	
	console.log('render', notes.length, 'notes')
	const addNote = (event) => {
		event.preventDefault()
		// console.log('button clicked', event.target)

		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
			// id: notes.length + 1,
		}

		noteService.create(noteObject)
		.then(returnedNote => {
			// console.log(response)
			setNotes(notes.concat(returnedNote))
			setNewNote('')
		})


	}

	const handleChange = (e) => {
		console.log(e.target.value)
		setNewNote(e.target.value)
	}

	const toggleImportance = (id) => {
		// const url = `http://localhost:3001/notes/${id}`
		const note = notes.find(n=>n.id === id)

		const changedNote = {...note, important: !note.important}

		// console.log('importance of ' + id + ' needs to be toggled')

		noteService.update(id, changedNote).then(returnedNote => {
			// console.log('response', response)
			setNotes(notes.map(note => note.id === id ? returnedNote : note))
		})
		// .catch(error = > {})
	}

	const notesToShow = showAll
		? notes
		: notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
			<div>        
				<button onClick={() => setShowAll(!showAll)}>          
					show {showAll ? 'important' : 'all' }        
				</button>      
			</div>
      <ul>
        {notesToShow.map(note =>           
        <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />        
        )}      
      </ul>
			<form onSubmit={addNote}> 
					<input value={newNote} onChange={handleChange}/>
					<button type="submit">save</button>
			</form>
    </div>
  )
}

export default App