import { useState, useEffect } from "react";

import axios from "axios";

import "./index.css";
import Notification from "./Components/Notification";
import personService from "./services/persons";
import Filter from "./Components/Filter";
import AddNewPerson from "./Components/AddNewPerson";
import Numbers from "./Components/Numbers";

function App() {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState({
    message: null,
    type: null,
  });

  useEffect(() => {
    personService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  }, []);

  const replaceNumber = (personObj, newNumber) => {
    console.log(`replacing ${personObj.id} number to new number ${newNumber}`);

    const updatedPerson = { ...personObj, number: newNumber };

    personService.edit(personObj.id, updatedPerson).then((responseData) => {
      console.log(responseData);
      setPersons(
        persons.map((person) =>
          person.id !== personObj.id ? person : responseData
        )
      );
    });
  };

  const addName = (newName, newNumber) => {
    const found = persons.filter((person) => person.name === newName);

    if (found.length >= 1 && found[0].number !== newNumber) {
      const isReplace = window.confirm(
        `${newName} is already added to phonebook, replace a new number with a new one?`
      );

      if (isReplace) {
        return replaceNumber(found[0], newNumber);
      }
      return;
    }

    if (found.length >= 1) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPersonObject = {
      name: newName,
      number: newNumber,
    };

    personService.create(newPersonObject).then((returnedPersons) => {
      setPersons(persons.concat(returnedPersons));
    });

    setNotification({
      message: `${newName} added to phonebook`,
      type: "success",
    });

    setTimeout(() => {
      setNotification({
        message: null,
        type: null,
      });
    }, 5000);
  };

  const deleteNotesHandler = (id) => {
    const deleteConfirmation = window.confirm(
      `Are you sure want to delete ${id}?`
    );
    if (deleteConfirmation) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.log(error);
          setNotification({
            message: `Person ${id} is already deleted from database`,
            type: "error",
          });
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={notification.type} message={notification.message} />
      <Filter filter={filter} setFilter={setFilter} />
      <AddNewPerson addName={addName} />
      <Numbers
        persons={persons}
        filter={filter}
        onDelete={deleteNotesHandler}
      />
    </div>
  );
}

export default App;
