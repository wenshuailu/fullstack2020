import React, { useState } from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};


const Content = (props) => {
  return (
    <div>
      <Part {...props.parts[0]} />
      <Part {...props.parts[1]} />
      <Part {...props.parts[2]} />
    </div>
  );
};

const Part = (props) => {
  // console.log(props);
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  const total = props.parts.map(part => part.exercises).reduce((a, c) => a+c);
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const {name, parts} = course;
  
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// const Button = (props) => {
//   return (
//     <button onClick = {props.handleClick}>
//       {props.text}
//     </button>
//   )
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0);
//   const [ clicks, setClicks] = useState({
//     left: 0,
//     right: 0
//   });

//   const handleLeftClick = () => {
//     const newClicks = {
//       left: clicks.left + 1,
//       ...clicks
//     }
//     setClicks(newClicks);
//   }

//   const handleRightClick = () => {
//     const newClicks = {
//       ...clicks,
//       right: clicks.right + 1
//     }
//     setClicks(newClicks);
//   }


//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button        
//         handleClick={increaseByOne}        
//         text='plus'      
//       />      
//       <Button        
//         handleClick={setToZero}        
//         text='zero'      
//       />           
//       <Button        
//         handleClick={decreaseByOne}        
//         text='minus'      
//       />    
//     </div>
//   )
// }
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = props => {
//   const [value, setValue] = useState(10)

//   const setToValue = newValue => {
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// )

// import App from './App'

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only Javascript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true
//   }
// ]

// ReactDOM.render(
//   <App notes={notes} />,
//   document.getElementById('root')
// )