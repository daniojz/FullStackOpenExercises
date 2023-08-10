import React from "react";
import Button from "./Button";

const Persons = ({ persons, handleDelete }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.number}>
          {person.name}: {person.number}
          <Button
            value={person.id}
            text={"delete"}
            handleClick={handleDelete}
          ></Button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
