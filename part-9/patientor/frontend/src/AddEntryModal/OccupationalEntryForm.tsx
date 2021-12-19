import { Field, Formik } from "formik";
import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import { DiagnosisSelection, TextField } from "../components/FormField";
import { Diagnosis, OccupationalHealthcareEntry } from "../types";

interface Props {
  onSubmit: (values: Omit<OccupationalHealthcareEntry, "id">) => void;
  onClose: () => void;
  diagnoses: Diagnosis[];
}

const AddEntryForm = ({ onSubmit, onClose, diagnoses }: Props) => {
  const inpValidate = (values: Omit<OccupationalHealthcareEntry, "id">) => {
    const requiredError = "Field is required";
    const errors: { [field: string]: string } = {};
    if (!values.date) {
      errors.date = requiredError;
    }
    if (!values.specialist) {
      errors.specialist = requiredError;
    }
    if (!values.description) {
      errors.description = requiredError;
    }
    if (!values.employerName) {
      errors.employerName = requiredError;
    }
    return errors;
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validate={inpValidate}
      initialValues={{
        date: "",
        specialist: "",
        type: "OccupationalHealthcare",
        description: "",
        employerName: "",
        diagnosisCodes: [],
      }}
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched, handleSubmit }) => (
        <Form className="form ui" onSubmit={handleSubmit}>
          <Field
            name="date"
            label="Date"
            placeholder="YYYY-MM-DD"
            component={TextField}
          />

          <Field
            name="description"
            label="Description"
            placeholder="..."
            component={TextField}
          />

          <Field
            name="specialist"
            label="Specialist"
            placeholder="specialist name"
            component={TextField}
          />

          <Field
            name="employerName"
            label="Employer"
            placeholder="employer name"
            component={TextField}
          />

          <DiagnosisSelection
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            diagnoses={Object.values(diagnoses)}
          />

          <Grid>
            <Grid.Column floated="left" width={5}>
              <Button type="button" onClick={onClose} color="red">
                Cancel
              </Button>
            </Grid.Column>

            <Grid.Column floated="right" width={5}>
              <Button
                type="submit"
                floated="right"
                color="blue"
                disabled={!dirty || !isValid}
              >
                Add
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AddEntryForm;
