import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}></Header>
      <Content
        part1={part1}
        exercices1={exercises1}
        part2={part2}
        exercices2={exercises2}
        part3={part3}
        exercices3={exercises3}
      ></Content>
      <Total
        exercises1={exercises1}
        exercices2={exercises2}
        exercices3={exercises3}
      ></Total>
    </div>
  );
};

export default App;
