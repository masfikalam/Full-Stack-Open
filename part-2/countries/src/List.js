const List = ({ show, setOpen }) => {
  if (show.length > 10) return <p>Too many matches, specify another filter</p>;

  return show.map((country) => (
    <div>
      <div key={country.cca3}>
        <span>{country.name.common}</span>
        <button onClick={() => setOpen(country)}>show</button>
      </div>
    </div>
  ));
};

export default List;
