import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import AddEntryModal from "../AddEntryModal";
import { apiBaseUrl } from "../constants";
import Entries from "../Entries";
import { selectPatient, useStateValue } from "../state";
import { Diagnosis, Entry, Patient } from "../types";

const PatientPage = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();
  const [patient, setPatient] = useState<Patient>();
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);
  const { id } = useParams<{ id: string }>();
  const [{ selected }, dispatch] = useStateValue();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const fetchDiagnoses = async () => {
    try {
      const { data: diags } = await axios.get<Diagnosis[]>(
        `${apiBaseUrl}/diagnoses`
      );
      setDiagnoses(diags);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchPatient = async () => {
    try {
      const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
      setPatient(data);
      dispatch(selectPatient(data));
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    void fetchDiagnoses();
    selected.id === id ? setPatient(selected) : void fetchPatient();
  }, [id]);

  const submitEntry = async (values: Omit<Entry, "id">) => {
    console.log(values);

    try {
      const { data: updated } = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${id}/entries`,
        values
      );
      setPatient(updated);
      dispatch(selectPatient(updated));
      closeModal();
    } catch (e: any) {
      setError(e.response.data);
    }
  };

  return (
    <div>
      <h2>
        {patient?.name}{" "}
        <Icon name={patient?.gender === "male" ? "mars" : "venus"} />
      </h2>

      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>

      <Button color="pink" onClick={() => openModal()}>
        Add New Entry
      </Button>

      {patient?.entries.length ? <h3>entries -</h3> : ""}
      {patient?.entries.map((entry) => (
        <Entries entry={entry} diagnoses={diagnoses} key={entry.id} />
      ))}

      <AddEntryModal
        diagnoses={diagnoses}
        modalOpen={modalOpen}
        onSubmit={submitEntry}
        error={error}
        onClose={closeModal}
      />
    </div>
  );
};

export default PatientPage;
