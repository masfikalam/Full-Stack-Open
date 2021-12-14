interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: 1 | 2 | 3;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (
  exercise: number[],
  target: number
): Result => {
  const trainingDays = exercise.filter((d) => Boolean(d)).length;
  const average = exercise.reduce((a, b) => a + b, 0) / exercise.length;
  const rating = average > target ? 3 : average > target / 2 ? 2 : 1;
  const ratingDescription =
    rating === 1
      ? "need improvement"
      : rating === 2
      ? "could be better"
      : "great job!";

  return {
    periodLength: exercise.length,
    trainingDays,
    success: average >= target,
    rating,
    ratingDescription,
    target,
    average,
  };
};
