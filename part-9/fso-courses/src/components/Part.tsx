import React from "react";
import { CoursePart } from "../App";

const Part = ({ part }: { part: CoursePart }) => {
  switch (part.type) {
    case "normal":
      return (
        <p>
          <i>
            <b>
              {part.name} {part.exerciseCount}
            </b>
          </i>
          <br />
          <span>{part.description}</span>
        </p>
      );
    case "groupProject":
      return (
        <p>
          <i>
            <b>
              {part.name} {part.exerciseCount}
            </b>
          </i>
          <br />
          <span>project exercises {part.groupProjectCount}</span>
        </p>
      );
    case "submission":
      return (
        <p>
          <i>
            <b>
              {part.name} {part.exerciseCount}
            </b>
          </i>
          <br />
          <span>{part.description}</span>
          <br />
          <span>{part.exerciseSubmissionLink}</span>
        </p>
      );
    case "special":
      return (
        <p>
          <i>
            <b>
              {part.name} {part.exerciseCount}
            </b>
          </i>
          <br />
          <span>{part.description}</span>
          <br />
          <span>
            required skills {part.requirements[0]}, {part.requirements[1]}
          </span>
        </p>
      );

    default:
      return <p></p>;
  }
};

export default Part;
