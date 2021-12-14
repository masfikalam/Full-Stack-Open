import express from "express";
import { getDiagnoses } from "../services/diagnoses";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(getDiagnoses());
});

router.post("/", (_req, res) => {
  res.send("adding diagnose");
});

export default router;
