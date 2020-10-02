import React from 'react'
// import Button from './Button';

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

export default PersonForm;
