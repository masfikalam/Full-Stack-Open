import { v1 as uuid } from "uuid";
import patientsData from "../../data/patients.json";
import { newPatient, Patient, securePatient } from "../types";

const patients: Patient[] = patientsData as Patient[];

export const getPatients = (): securePatient[] => {
  return patients.map(function ({ id, name, dateOfBirth, gender, occupation }) {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

export const findById = (id: string): Patient | undefined => {
  return patients.find((patient) => patient.id === id);
};

export const addPatient = (patient: newPatient): Patient => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const id: string = uuid() as string;
  const newEntry = { id, ...patient };
  patients.push(newEntry);
  return newEntry;
};
