import Person from "./Person";
import { deleteContact } from "./services/persons";

const Persons = ({ persons, search, setPersons, setMessage }) => {
  const deletePerson = (id, name) => {
    const conf = window.confirm(`Delete ${name}?`);

    if (conf) {
      deleteContact(id)
        .then(() => {
          const newArray = persons.filter((p) => p.id !== id);
          setPersons(newArray);
          setMessage(`Deleted ${name}`);
          setTimeout(() => {
            setMessage(null);
          }, 3000);
        })
        .catch(() => {
          setMessage(
            `Information of ${name} has already been deleted from server`
          );
          setTimeout(() => {
            setMessage(null);
          }, 3000);
        });
    }
  };

  return persons
    .filter((p) => p.name.toLowerCase().startsWith(search.toLowerCase()))
    .map((p, i) => <Person person={p} key={i} deleteP={deletePerson} />);
};

export default Persons;
