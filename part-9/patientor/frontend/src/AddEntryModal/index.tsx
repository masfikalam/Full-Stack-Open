import React, { useState } from "react";
import { Button, Modal, Segment } from "semantic-ui-react";
import { Diagnosis, Entry } from "../types";
import HealthCheckEntryForm from "./HealthCheckEntryForm";
import HospitalEntryForm from "./HospitalEntryForm";
import OccupationalEntryForm from "./OccupationalEntryForm";

export interface Props {
  diagnoses: Diagnosis[];
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Omit<Entry, "id">) => void;
  error?: string;
}

const AddEntryModal = ({
  diagnoses,
  modalOpen,
  onClose,
  onSubmit,
  error,
}: Props) => {
  const [showForm, setShowForm] = useState<number>(0);
  const forms = [
    <HospitalEntryForm
      key={0}
      onClose={onClose}
      onSubmit={onSubmit}
      diagnoses={diagnoses}
    />,
    <OccupationalEntryForm
      key={1}
      onSubmit={onSubmit}
      onClose={onClose}
      diagnoses={diagnoses}
    />,
    <HealthCheckEntryForm
      key={2}
      onSubmit={onSubmit}
      onClose={onClose}
      diagnoses={diagnoses}
    />,
  ];

  return (
    <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
      <Modal.Header>Add a new entry</Modal.Header>

      <Modal.Content>
        <Button color="instagram" onClick={() => setShowForm(0)}>
          Hospital Entry
        </Button>
        <Button color="instagram" onClick={() => setShowForm(1)}>
          Occupational Health Care Entry
        </Button>
        <Button color="instagram" onClick={() => setShowForm(2)}>
          Health Check Entry
        </Button>
        <br />
        <br />

        {error && (
          <Segment inverted color="red">
            Oops: {error}
          </Segment>
        )}
        {forms[showForm]}
      </Modal.Content>
    </Modal>
  );
};

export default AddEntryModal;
