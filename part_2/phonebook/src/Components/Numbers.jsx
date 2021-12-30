import React from "react";

function Numbers({ persons, filter, onDelete }) {
  const personsToShow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );
  return (
    <div>
      <h2>Numbers</h2>
      {personsToShow.map((person) => {
        return (
          <div key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => onDelete(person.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Numbers;
