// 1,12 -1.14

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Display = (props) => {
  const {anecdotes, voteObj} = props;

  let max = 0;
  let keyName;

  for (let key in voteObj) {
    let temp = voteObj[key];
    if (temp >= max) {
      max = temp;
      keyName = key;
    }
  }

  return (
    <div>
      <p>{anecdotes[parseInt(keyName)]}</p>
      <p>has {max} votes</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState({})

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const geAnecdotes = () => {
    setSelected(randomInt(0, props.anecdotes.length))
  }

  const voteAnecdotes = () => {
    console.log('sele: ' + selected)
    const points = {
      ...votes,
      
    }

    if (selected in points) {
      points[selected] += 1;
    } else {
      points[selected] = 1;
    }

    console.log('points: ', points)
    
    setVote(points)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>{votes[selected] > 0 ?  `has ${votes[selected]} vote` : `has 0 vote` }</p>
      <Button text = 'vote' handleClick={voteAnecdotes} />
      <Button text = 'next anecdot' handleClick={geAnecdotes} />
      <h1>Anecdote with most votes</h1>
      <Display anecdotes={anecdotes} voteObj={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
