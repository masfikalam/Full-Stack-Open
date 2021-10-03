import React from "react";
import { useSelector } from "react-redux";
import Feedback from "./Feedback";

const Statistics = () => {
  const { good, ok, bad } = useSelector((state) => state);
  const total = good + ok + bad;
  const avarage = (good + bad * -1) / total;
  const positive = good / total;

  if (total === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <Feedback text="good" number={good} />
        <Feedback text="ok" number={ok} />
        <Feedback text="bad" number={bad} />
        <Feedback text="all" number={total} />
        <Feedback text="average" number={avarage} />
        <Feedback text="positive" number={positive * 100} />
      </tbody>
    </table>
  );
};

export default Statistics;
