import React from "react";
import { Entry, OccupationalHealthcareEntry } from "../types";

const OccupationalEntry = ({ entry }: { entry: Entry }) => {
  const newEntry = entry as OccupationalHealthcareEntry;
  return (
    <div>
      <i>sick leave</i>
      <ul>
        <li>start: {newEntry.sickLeave?.startDate}</li>
        <li>end: {newEntry.sickLeave?.endDate}</li>
      </ul>
    </div>
  );
};

export default OccupationalEntry;
