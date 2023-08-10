import React from "react";

const Total = ({ parts }) => {
  return (
    <p>
      <strong>
        Total of
        {" " +
          parts.reduce((acumulator, current) => {
            return acumulator + current.exercises;
          }, 0) +
          " "}
        exercises
      </strong>
    </p>
  );
};

export default Total;
