import React from "react";

// header component
const Header = ({ course }) => <h1>{course.name}</h1>;

// part component
const Part = ({ name, exercise }) => (
  <p>
    {name} {exercise}
  </p>
);

// content component
const Content = ({ parts }) => (
  <div>
    {parts.map((p) => (
      <Part name={p.name} exercise={p.exercises} />
    ))}
  </div>
);

// total component
const Total = ({ parts }) => {
  const [one, two, three] = parts;
  const total = one.exercises + two.exercises + three.exercises;

  return <p>Number of exercises {total}</p>;
};

// main app component
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
