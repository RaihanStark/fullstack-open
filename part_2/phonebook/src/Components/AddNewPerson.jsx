import React from "react";
import { useState } from "react";

function AddNewPerson({ addName }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  return (
    <>
      <h2>Add new Phonebook</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addName(newName, newNumber);
          setNewName("");
          setNewNumber("");
        }}
      >
        <div>
          Name:
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          Number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

export default AddNewPerson;
