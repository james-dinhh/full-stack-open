import { useState } from "react";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const submitHandler = (e) => {
    e.preventDefault();
    const personObject = {
      name: newPerson.name,
      number: newPerson.number,
    };

    const existingPerson = persons.some(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase(),
    );
    if (existingPerson) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }

    setPersons((prevPersons) => prevPersons.concat(personObject));
    setNewPerson({ name: "", number: "" });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>add a new</h2>
      <form onSubmit={submitHandler}>
        <div>
          name:{" "}
          <input
            value={newPerson.name}
            onChange={(e) =>
              setNewPerson({ ...newPerson, name: e.target.value })
            }
          />
          <br />
          <br />
          number:{" "}
          <input
            value={newPerson.number}
            onChange={(e) =>
              setNewPerson({ ...newPerson, number: e.target.value })
            }
          />
        </div>
        <br />
        <div>
          <button type="submit">add</button>
        </div>
        <br />
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
