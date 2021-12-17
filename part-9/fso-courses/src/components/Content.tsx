import React from "react";
import { CoursePart } from "../App";
import Part from "./Part";

const Content = ({ parts }: { parts: CoursePart[] }) => {
  return (
    <div>
      {parts.map((part, id) => (
        <Part key={id} part={part} />
      ))}
    </div>
  );
};

export default Content;
