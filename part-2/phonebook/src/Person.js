const Person = ({ person, deleteP }) => {
  return (
    <div>
      <span>
        {person.name} {person.number}
      </span>
      <button onClick={() => deleteP(person.id, person.name)}>delete</button>
    </div>
  );
};

export default Person;
