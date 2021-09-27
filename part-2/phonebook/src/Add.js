import { useState } from "react";
import { addContact } from "./services/persons";

const Add = ({ setMessage, persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addPerson = (e) => {
    e.preventDefault();

    const newObj = { name: newName, number: newPhone };
    addContact(newObj).then((data) => {
      setPersons([...persons, data.data]);
      setMessage(`Added ${data.data.name}`);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      setNewName("");
      setNewPhone("");
    });
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name:{" "}
        <input
          required
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      number:{" "}
      <input
        required
        value={newPhone}
        onChange={(e) => setNewPhone(e.target.value)}
      />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Add;
