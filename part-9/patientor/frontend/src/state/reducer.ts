import { Patient } from "../types";
import { State } from "./state";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "SET_SELECTED";
      payload: Patient;
    };

export const setPatientList = (payload: Patient[]): Action => {
  return { type: "SET_PATIENT_LIST", payload };
};

export const addPatient = (payload: Patient): Action => {
  return { type: "ADD_PATIENT", payload };
};

export const selectPatient = (payload: Patient): Action => {
  return { type: "SET_SELECTED", payload };
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };

    case "SET_SELECTED":
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};
