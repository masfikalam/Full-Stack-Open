import React from "react";
import { Icon } from "semantic-ui-react";
import { Entry, HealthCheckEntry } from "../types";

const HospitalEntry = ({ entry }: { entry: Entry }) => {
  const newEntry = entry as HealthCheckEntry;

  return (
    <div>
      <i>
        healthcare rating: <Icon name="heart" />x{newEntry.healthCheckRating}
      </i>
    </div>
  );
};

export default HospitalEntry;
