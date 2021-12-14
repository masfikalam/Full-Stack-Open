import diagnosesData from "../../data/diagnoses.json";
import { Diagnosis } from "../types";

const dignoses: Diagnosis[] = diagnosesData;

export const getDiagnoses = (): Diagnosis[] => {
  return dignoses;
};
