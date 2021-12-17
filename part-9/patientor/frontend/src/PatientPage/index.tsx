import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { apiBaseUrl } from "../constants";
import Entries from "../Entries";
import { selectPatient, useStateValue } from "../state";
import { Diagnosis, Patient } from "../types";

const PatientPage = () => {
  const [patient, setPatient] = useState<Patient>();
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>();
  const { id } = useParams<{ id: string }>();
  const [{ selected }, dispatch] = useStateValue();

  React.useEffect(() => {
    const fetchPatient = async () => {
      try {
        const { data } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        setPatient(data);
        dispatch(selectPatient(data));

        const { data: diags } = await axios.get<Diagnosis[]>(
          `${apiBaseUrl}/diagnoses`
        );
        setDiagnoses(diags);
      } catch (e) {
        console.error(e);
      }
    };

    selected.id === id ? setPatient(selected) : void fetchPatient();
  }, [id]);

  return (
    <div>
      <h2>
        {patient?.name}{" "}
        <Icon name={patient?.gender === "male" ? "mars" : "venus"} />
      </h2>

      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>

      <h4>entries</h4>
      {patient?.entries.map((entry) => (
        <Entries entry={entry} diagnoses={diagnoses} key={entry.id} />
      ))}
    </div>
  );
};

export default PatientPage;
