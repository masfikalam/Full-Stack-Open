const Total = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises);
  const total = exercises.reduce((a, b) => a + b);

  return <b>Total of {total} exercises</b>;
};

export default Total;
