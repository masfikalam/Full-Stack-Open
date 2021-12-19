import express from "express";
import { newEntry, newPatient } from "../types";
import { typeEntry, typeReq } from "../utils";
import {
  addEntry,
  addPatient,
  findById,
  getPatients,
} from "./../services/patients";
import { Patient } from "./../types";

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
    const typedPatient: newPatient = typeReq(req.body);
    const patient: Patient = addPatient(typedPatient);

    res.json(patient);
  } catch (e: unknown) {
    e instanceof Error && res.status(403).send(e.message);
  }
});

router.post("/:id/entries", (req, res) => {
  try {
    const typedEntry: newEntry = typeEntry(req.body);
    const patient = addEntry(req.params.id, typedEntry);
    res.json(patient);
  } catch (e: unknown) {
    e instanceof Error && res.status(403).send(e.message);
  }
});

export default router;
