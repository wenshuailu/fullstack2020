// import React from "react";
// import ReactDOM from "react-dom";
// import Course from "./components/Course";

// const App = () => {
//   const courses = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     }, 
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]
  
//   return (
//     <div>
//         {courses.map( course => 
//           <Course key = {course.id} course={course} />
//         )}

//     </div>
//   ) 

// };

// ReactDOM.render(<App />, document.getElementById('root'))

//part 2 b forms
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

ReactDOM.render(
  <App />,
  document.getElementById('root')
)