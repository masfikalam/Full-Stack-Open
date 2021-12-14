import express from "express";
import { Patient } from "../types";
import { typeReq } from "../utils";
import { addPatient, findById, getPatients } from "./../services/patients";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(getPatients());
});

router.get("/:id", (req, res) => {
  const patient = findById(req.params.id);
  patient ? res.json(patient) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const typedEntry = typeReq(req.body);
    const patient: Patient = addPatient(typedEntry);

    res.json(patient);
  } catch (e: unknown) {
    e instanceof Error && console.log(e.message);
  }
});

export default router;
