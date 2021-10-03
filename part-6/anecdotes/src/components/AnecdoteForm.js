import { connect } from "react-redux";
import { addAnc } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
  const add = async (e) => {
    e.preventDefault();

    const inpField = e.target.content;
    props.addAnc(inpField.value);
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

export default connect(null, { addAnc })(AnecdoteForm);
