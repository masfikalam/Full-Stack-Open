import React from "react";
import { useDispatch } from "react-redux";
import Statistics from "./Statistics";

const App = () => {
  const dispatch = useDispatch();

  const goodFeed = () => dispatch({ type: "GOOD" });
  const okFeed = () => dispatch({ type: "OK" });
  const badFeed = () => dispatch({ type: "BAD" });

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodFeed}>good</button>
      <button onClick={okFeed}>ok</button>
      <button onClick={badFeed}>bad</button>

      <Statistics />
    </div>
  );
};

export default App;
