import { useState } from "react";
import Filter from "./Components/Filter";
import AddNewPerson from "./Components/AddNewPerson";
import Numbers from "./Components/Numbers";

function App() {
  const [persons, setPersons] = useState([
    { id: 0, name: "Arto Hellas", number: "0851-5643-7222" },
  ]);
  const [filter, setFilter] = useState("");

  const addName = (newName, newNumber) => {
    const found = persons.find((person) => person.name === newName);
    if (found) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPersonObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(newPersonObject));
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} setFilter={setFilter} />
      <AddNewPerson addName={addName} />
      <Numbers persons={persons} filter={filter} />
    </div>
  );
}

export default App;
