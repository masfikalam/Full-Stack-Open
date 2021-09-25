import React, { useState } from "react";

// button component
const Button = ({ onclick, text }) => <button onClick={onclick}>{text}</button>;

// feedback component
const Feedback = ({ text, number }) => (
  <tr>
    <td>{text}</td>
    <td>{number}</td>
  </tr>
);

// statistic component
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const avarage = (good + bad * -1) / total;
  const positive = good / total;

  if (total === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <Feedback text={good} number={good} />
        <Feedback text="good" number={good} />
        <Feedback text="neutral" number={neutral} />
        <Feedback text="bad" number={bad} />
        <Feedback text="all" number={total} />
        <Feedback text="average" number={avarage} />
        <Feedback text="positive" number={positive * 100} />
      </tbody>
    </table>
  );
};

// main app component
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeed = () => setGood(good + 1);
  const neutralFeed = () => setNeutral(neutral + 1);
  const badFeed = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onclick={goodFeed} text="good" />
      <Button onclick={neutralFeed} text="neutral" />
      <Button onclick={badFeed} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
