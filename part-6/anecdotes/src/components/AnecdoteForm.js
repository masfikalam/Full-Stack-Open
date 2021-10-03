import { useDispatch } from "react-redux";
import { addAnc } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = async (e) => {
    e.preventDefault();

    const inpField = e.target.content;
    dispatch(addAnc(inpField.value));
    inpField.value = "";
  };

  return (
    <form onSubmit={add}>
      <br />
      <h2>create new</h2>
      <input name="content" /> <button>create</button>
    </form>
  );
};

export default AnecdoteForm;
