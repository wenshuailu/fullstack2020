import React from "react";
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
      {props.name} {props.count}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.exercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const parts = [
    {
      name: part1,
      count: exercises1,
    },
    {
      name: part2,
      count: exercises2,
    },
    {
      name: part3,
      count: exercises3,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
      {/* <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
