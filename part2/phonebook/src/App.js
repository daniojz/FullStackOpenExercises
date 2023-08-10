import React, { useEffect, useState } from "react";
import Form from "./Components/PersonForm";
import Persons from "./Components/Persons";
import Filter from "./Components/Filter";
import personsService from "./Services/persons";
import Notification from "./Components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setFilteredList] = useState(persons);
  const [notification, setNotification] = useState({
    message: null,
    result: null,
  });

  useEffect(() => {
    personsService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  useEffect(() => {
    setFilteredList(persons);
  }, [persons]);

  const addPerson = (newPerson) => {
    personsService.add(newPerson).then((person) => {
      const message = `Added ${person.name}`;

      setPersons(persons.concat(person));
      createNotification(message, true);
    });
  };

  const updatePerson = (id, newPerson) => {
    personsService
      .update(id, newPerson)
      .then((updatedPerson) => {
        const message = `Updated ${updatedPerson.name}`;

        setPersons(
          persons.map((person) => (person.id !== id ? person : updatedPerson))
        );
        createNotification(message, true);
      })
      .catch((error) => {
        const message = `Information of '${newPerson.name}' was already removed from server`;

        createNotification(message, false);
      });
  };

  const deletePerson = (event) => {
    const personId = event.target.value;

    personsService
      .remove(personId)
      .then(() => {
        const message = `${
          persons.filter((person) => JSON.stringify(person.id) === personId)[0]
            .name
        } deleted successfully`;

        setPersons(
          persons.filter((person) => JSON.stringify(person.id) !== personId)
        );
        createNotification(message, true);
      })
      .catch((error) => {
        const message = `This information was already removed from server, refresh the page`;

        createNotification(message, false);
      });
  };

  const createNotification = (message, result) => {
    setNotification({ ...notification, message: message, result: result });
    setTimeout(() => {
      setNotification({ ...notification, message: null, result: null });
    }, 5000);
  };

  const handleNameOnChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberOnChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterOnChange = (event) => {
    if (event.target.value === "") {
      setFilteredList(persons);
    } else {
      setFilteredList(
        persons.filter(
          (person) =>
            person.name
              .toLowerCase()
              .search(event.target.value.toLowerCase()) !== -1
        )
      );
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    const existingPerson = persons.find(
      (person) => JSON.stringify(person.name) === JSON.stringify(newName)
    );

    if (existingPerson !== undefined) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        updatePerson(existingPerson.id, newPerson);
      }
    } else {
      addPerson(newPerson);
    }
  };

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <Form
          handleOnSubmit={onSubmitHandler}
          newName={newName}
          newNumber={newNumber}
          handleNameOnChange={handleNameOnChange}
          handleNumberOnchange={handleNumberOnChange}
        ></Form>
      </div>
      <div>
        <h2>Numbers</h2>
        <Filter onChangeHandler={handleFilterOnChange}></Filter>
        <Persons persons={filteredList} handleDelete={deletePerson}></Persons>
      </div>
      <Notification
        message={notification.message}
        operationResult={notification.result}
      ></Notification>
    </div>
  );
}

export default App;
