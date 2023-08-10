import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return course.map((subject) => (
    <div key={subject.id}>
      <Header courseName={subject.name}></Header>
      <Content parts={subject.parts}></Content>
      <Total parts={subject.parts}></Total>
    </div>
  ));
};

export default Course;
