const Filter = ({ persons, setSearch }) => {
  return (
    <>
      filter shown with: <input onChange={(e) => setSearch(e.target.value)} />
    </>
  );
};

export default Filter;
