import { useDispatch, useSelector } from "react-redux";
import { voteAnc } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(({ anecdote, filter }) =>
    anecdote.filter((anc) => anc.content.includes(filter))
  );

  const vote = async (anc) => {
    dispatch(voteAnc(anc));
    dispatch(notify(`You voted "${anc.content}"`, 5));
  };

  return (
    <>
      <h2>anecdotes</h2>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <p>
              {anecdote.content} <br />
              has {anecdote.votes}{" "}
              <button onClick={() => vote(anecdote)}>vote</button>
            </p>
          </div>
        ))}
    </>
  );
};

export default AnecdoteList;
