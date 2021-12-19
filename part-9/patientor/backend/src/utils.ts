/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Gender,
  HealthCheckEntry,
  HospitalEntry,
  newEntry,
  newPatient,
  OccupationalHealthcareEntry,
} from "./types";

const isString = (text: unknown): text is string => typeof text === "string";

const isDate = (date: string): boolean => Boolean(Date.parse(date));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (str: any): str is Gender =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  Object.values(Gender).includes(str);

const parseString = (str: unknown): string => {
  if (!str || !isString(str)) {
    throw new Error("Incorrect or missing str");
  }
  return str;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date");
  }
  return date;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing gender");
  }
  return gender;
};

const parseHealthCheck = (entry: newEntry): HealthCheckEntry => {
  const hEntry = entry as HealthCheckEntry;
  if (![0, 1, 2, 3].includes(hEntry.healthCheckRating)) {
    throw new Error("Incorrect or missing health check rating");
  }
  return hEntry;
};

const parseHospital = (entry: newEntry): HospitalEntry => {
  const hEntry = entry as HospitalEntry;
  if (!hEntry.discharge.date) {
    throw new Error("Incorrect or missing discharge date");
  }
  return hEntry;
};

const parseOccupational = (entry: newEntry): OccupationalHealthcareEntry => {
  const oEntry = entry as OccupationalHealthcareEntry;

  if (!oEntry.employerName) {
    throw new Error("Incorrect or missing employer name");
  }
  return oEntry;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const typeReq = (patient: any): newPatient => {
  const newEntry = {
    name: parseString(patient.name),
    ssn: parseString(patient.ssn),
    dateOfBirth: parseDate(patient.dateOfBirth),
    gender: parseGender(patient.gender),
    occupation: parseString(patient.occupation),
  };

  return newEntry;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const typeEntry = (entry: any): newEntry => {
  const newE: newEntry = {
    ...entry,
    type: parseString(entry.type),
    description: parseString(entry.description),
    date: parseDate(entry.date),
    specialist: parseString(entry.specialist),
  };

  switch (newE.type) {
    case "Hospital":
      return parseHospital(newE);
    case "OccupationalHealthcare":
      return parseOccupational(newE);
    case "HealthCheck":
      return parseHealthCheck(newE);
    default:
      throw new Error("incorrect or missing entry type");
  }
};
