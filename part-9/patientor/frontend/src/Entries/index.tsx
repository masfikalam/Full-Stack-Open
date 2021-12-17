import React from "react";
import { Icon } from "semantic-ui-react";
import { Diagnosis, Entry } from "../types";
import HealthCheckEntry from "./HealthCheckEntry";
import HospitalEntry from "./HospitalEntry";
import OccupationalEntry from "./OccupationalEntry";

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntry entry={entry} />;
    case "OccupationalEntry":
      return <OccupationalEntry entry={entry} />;
    case "HealthCheck":
      return <HealthCheckEntry entry={entry} />;
    default:
      return <div></div>;
  }
};

const Entries = ({
  entry,
  diagnoses,
}: {
  entry: Entry;
  diagnoses: Diagnosis[] | undefined;
}) => {
  return (
    <div>
      <h5>
        <Icon name="lab" />
        <u>{entry.date}</u>
      </h5>

      <p>{entry.description}</p>

      {entry.diagnosisCodes && (
        <>
          <i>diagnoses -</i>
          <ul>
            {entry.diagnosisCodes?.map((code) => (
              <li key={code}>
                {code} - {diagnoses?.find((d) => d.code === code)?.name}
              </li>
            ))}
          </ul>
        </>
      )}

      <EntryDetails entry={entry} />
    </div>
  );
};

export default Entries;
