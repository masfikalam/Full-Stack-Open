type parsedArgs = { value1: number | number[]; value2: number };
type files = "bmi" | "exercise";

export const parseArguments = (args: string[], file: files): parsedArgs => {
  switch (file) {
    case "bmi":
      if (args.length < 4) throw new Error("Not enough arguments");
      if (args.length > 4) throw new Error("Too many arguments");

      if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
          value1: Number(args[2]),
          value2: Number(args[3]),
        };
      } else {
        throw new Error("Provided values were not numbers!");
      }

    case "exercise":
      const hours = args.slice(2);
      const target = hours.shift();

      return {
        value1: hours.map((day) => Number(day)),
        value2: Number(target),
      };
  }
};
