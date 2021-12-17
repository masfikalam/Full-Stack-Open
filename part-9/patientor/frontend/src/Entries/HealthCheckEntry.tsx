import React from "react";
import { Icon } from "semantic-ui-react";
import { Entry, HealthCheckEntry } from "../types";

const HospitalEntry = ({ entry }: { entry: Entry }) => {
  const newEntry = entry as HealthCheckEntry;

  return (
    <div>
      <i>healthcare</i>
      <ul>
        <li>
          rating: <Icon name="heart" /> x{newEntry.healthCheckRating}
        </li>
        <li>speacialist: {newEntry.specialist}</li>
      </ul>
    </div>
  );
};

export default HospitalEntry;
