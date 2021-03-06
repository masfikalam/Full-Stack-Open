import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { GenderOption, SelectField, TextField } from "../components/FormField";
import { Gender, Patient } from "../types";

export type PatientFormValues = Omit<Patient, "id" | "entries">;

export interface Props {
  onSubmit: (values: PatientFormValues) => void;
  onCancel: () => void;
}

const genderOptions: GenderOption[] = [
  { value: Gender.Male, label: "Male" },
  { value: Gender.Female, label: "Female" },
  { value: Gender.Other, label: "Other" },
];

export const AddPatientForm = ({ onSubmit, onCancel }: Props) => {
  const inpValidate = (values: PatientFormValues) => {
    const requiredError = "Field is required";
    const errors: { [field: string]: string } = {};
    if (!values.name) {
      errors.name = requiredError;
    }
    if (!values.ssn) {
      errors.ssn = requiredError;
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = requiredError;
    }
    if (!values.occupation) {
      errors.occupation = requiredError;
    }
    return errors;
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validate={inpValidate}
      initialValues={{
        name: "",
        ssn: "",
        dateOfBirth: "",
        occupation: "",
        gender: Gender.Other,
      }}
    >
      {({ isValid, dirty }) => {
        return (
          <Form className="form ui">
            <Field
              label="Name"
              placeholder="Name"
              name="name"
              component={TextField}
            />
            <Field
              label="Social Security Number"
              placeholder="SSN"
              name="ssn"
              component={TextField}
            />
            <Field
              label="Date Of Birth"
              placeholder="YYYY-MM-DD"
              name="dateOfBirth"
              component={TextField}
            />
            <Field
              label="Occupation"
              placeholder="Occupation"
              name="occupation"
              component={TextField}
            />
            <SelectField label="Gender" name="gender" options={genderOptions} />

            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>

              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddPatientForm;
