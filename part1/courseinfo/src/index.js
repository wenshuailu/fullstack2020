import React, { useState } from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const Header = (props) => {
//   return <h1>{props.course}</h1>;
// };


// const Content = (props) => {
//   return (
//     <div>
//       <Part {...props.parts[0]} />
//       <Part {...props.parts[1]} />
//       <Part {...props.parts[2]} />
//     </div>
//   );
// };

// const Part = (props) => {
//   // console.log(props);
//   return (
//     <p>
//       {props.name} {props.exercises}
//     </p>
//   );
// };

// const Total = (props) => {
//   const total = props.parts.map(part => part.exercises).reduce((a, c) => a+c);
//   return <p>Number of exercises {total}</p>;
// };

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   const {name, parts} = course;
  
//   return (
//     <div>
//       <Header course={name} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   );
// };
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0);

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button        
        handleClick={increaseByOne}        
        text='plus'      
      />      
      <Button        
        handleClick={setToZero}        
        text='zero'      
      />           
      <Button        
        handleClick={decreaseByOne}        
        text='minus'      
      />    
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)