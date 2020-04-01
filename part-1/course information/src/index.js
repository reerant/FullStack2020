import React from "react";
import ReactDOM from "react-dom";

// render page header
const Header = props => <h1>{props.course}</h1>;

// render part and exercise info
const Part = props => (
  <p>
    {props.part} {props.exercises}
  </p>
);

//render course's content parts
const Content = props => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};

//render total amount of exercises
const Total = props => {
  let totalofExercises =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return <p>Number of exercises {totalofExercises}</p>;
};

//render the app
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
