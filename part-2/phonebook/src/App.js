import axios from "axios";
import React, { useEffect, useState } from "react";
import Add from "./Add";
import Filter from "./Filter";
import Notification from "./Notification";
import Persons from "./Persons";

const App = () => {
  const [search, setSearch] = useState("");
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/persons")
      .then((data) => setPersons(data.data));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setSearch={setSearch} />

      {message && <Notification message={message} />}

      <h2>add a new</h2>
      <Add setMessage={setMessage} persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons
        setMessage={setMessage}
        persons={persons}
        search={search}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
