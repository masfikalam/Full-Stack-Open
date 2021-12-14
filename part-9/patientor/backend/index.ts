import cors from "cors";
import express from "express";
import diagnosesRouter from "./src/routes/diagnoses";
import patientsRouter from "./src/routes/patients";

const PORT = 3001;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.use("/api/patients", patientsRouter);
app.use("/api/diagnoses", diagnosesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
