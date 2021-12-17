import { v1 as uuid } from "uuid";
import patientsData from "../../data/patients";
import { newPatient, Patient, publicPatient } from "../types";

export const getPatients = (): publicPatient[] => {
  return patientsData.map(function ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }) {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

export const findById = (id: string): Patient | undefined => {
  return patientsData.find((patient) => patient.id === id);
};

export const addPatient = (patient: newPatient): Patient => {
  const id: string = uuid();
  const newEntry = { id, ...patient, entries: [] };
  patientsData.push(newEntry);
  return newEntry;
};
