import { useDispatch } from "react-redux";
import { filterAnc } from "../reducers/filterReducer";

const AnecdoteFilter = () => {
  const dispatch = useDispatch();

  const filter = (e) => {
    dispatch(filterAnc(e.target.value));
  };

  return (
    <>
      <h2>filter</h2>
      <input onChange={filter} />
    </>
  );
};

export default AnecdoteFilter;
