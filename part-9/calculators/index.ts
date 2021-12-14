import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
    const bmi = calculateBmi(Number(height), Number(weight));
    res.json({ weight, height, bmi });
  } else res.json({ error: "malformatted parameters" });
});

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body;

  if (daily_exercises && target) {
    const result = calculateExercises(
      JSON.parse(daily_exercises),
      Number(target)
    );

    res.json(result);
  } else res.json({ error: "parameters missing" });
});

app.listen(4000, () => console.log("server running"));
