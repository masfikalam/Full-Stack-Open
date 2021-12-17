import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}
interface CommonParts extends CoursePartBase {
  description: string;
}
interface CourseNormalPart extends CommonParts {
  type: "normal";
}
interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}
interface CourseSubmissionPart extends CommonParts {
  type: "submission";
  exerciseSubmissionLink: string;
}
interface CourseSpecialPart extends CommonParts {
  type: "special";
  requirements: string[];
}

export type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseSpecialPart;

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is the leisured course part",
      type: "normal",
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      description: "This is the harded course part",
      type: "normal",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject",
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission",
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      type: "special",
    },
  ];

  return (
    <main>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total parts={courseParts} />
    </main>
  );
};

export default App;
