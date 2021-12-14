import { Gender, newPatient } from "./types";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const typeReq = (patient: any): newPatient => {
  const newEntry = {
    name: parseString(patient.name),
    dateOfBirth: parseDate(patient.dateOfBirth),
    gender: parseGender(patient.gender),
    occupation: parseString(patient.occupation),
  };

  return newEntry;
};
