import React, { createContext, useContext, useReducer } from "react";
import { Diagnosis, Patient } from "../types";
import { Action } from "./reducer";

export type State = {
  patients: Map<string, Patient>;
  selected: Patient;
  diagnoses: Diagnosis[];
};

const initialState: State = {
  patients: new Map<string, Patient>(),
  selected: {} as Patient,
  diagnoses: [] as Diagnosis[],
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
]);

type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children,
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
