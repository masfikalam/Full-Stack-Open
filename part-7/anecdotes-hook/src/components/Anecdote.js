import React from "react";
import { useParams } from "react-router";

const Anecdote = ({ anecdotes }) => {
  const { id } = useParams();
  const obj = anecdotes.find((a) => a.id === id);

  return (
    <article>
      <h3>
        {obj.content}
        <small> ({obj.author})</small>
      </h3>
      <p>has {obj.votes} votes</p>
      <p>
        for more info see <a href={obj.info}>{obj.info}</a>
      </p>
    </article>
  );
};

export default Anecdote;
