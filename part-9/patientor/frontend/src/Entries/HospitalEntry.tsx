import React from "react";
import { Entry, HospitalEntry } from "../types";

const HospitalEntries = ({ entry }: { entry: Entry }) => {
  const newEntry = entry as HospitalEntry;

  return (
    <div>
      <i>dicharge</i>
      <ul>
        <li>date: {newEntry.discharge.date}</li>
        <li>condition: {newEntry.discharge.criteria}</li>
      </ul>
    </div>
  );
};

export default HospitalEntries;
