import React from "react";
import Part from "./Part";

const Content = ({
  part1,
  exercices1,
  part2,
  exercices2,
  part3,
  exercices3,
}) => {
  return (
    <>
      <Part part={part1} exercices={exercices1}></Part>
      <Part part={part2} exercices={exercices2}></Part>
      <Part part={part3} exercices={exercices3}></Part>
    </>
  );
};

export default Content;
