import React from "react";

interface Part {
  name: string;
  exerciseCount: number;
}

const Total = ({ parts }: { parts: Part[] }) => {
  return (
    <h3>
      Number of exercises{" "}
      {parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </h3>
  );
};

export default Total;
