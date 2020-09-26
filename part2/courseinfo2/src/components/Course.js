import React from "react";

const Header = (props) => {
    return <h1>{props.course}</h1>;
  };
  
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => 
          <Part key = {part.id} name={part.name} exercises={part.exercises} />
        )}
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
    return <h3>Number of exercises {total}</h3>;
  };
  
  const Course = (props) => {
    const {name, parts} = props.course;
    return (
      <div>
        <Header course={name} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    )
  }

  export default Course

