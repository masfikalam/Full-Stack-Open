import { useHistory } from "react-router";
import { useField } from "../hooks";

const CreateNew = ({ addNew, notify }) => {
  const content = useField("text");
  const author = useField("text");
  const info = useField("text");
  const history = useHistory();

  const resetForm = () => {
    content.reset();
    author.reset();
    info.reset();
  };

  const submitForm = (e) => {
    e.preventDefault();

    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });

    history.push("/");
    notify(`a new anecdote "${content.value}" created!"`);
    setTimeout(() => notify(""), 10000);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>

      <form onSubmit={submitForm}>
        <div>
          content
          <input {...content} reset="" />
        </div>
        <div>
          author
          <input {...author} reset="" />
        </div>
        <div>
          url for more info
          <input {...info} reset="" />
        </div>
        <button type="submit">create</button>
        <button type="reset" onClick={resetForm}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
