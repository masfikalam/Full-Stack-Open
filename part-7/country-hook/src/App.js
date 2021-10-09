import React, { useState } from "react";
import { useCountry, useField } from "./hooks";

const Country = ({ country }) => {
  if (!country) {
    return null;
  }

  if (!country.found) {
    return <p>not found...</p>;
  } else {
    return (
      <div>
        <h3>{country.name.common} </h3>
        <p>capital {country.capital[0]} </p>
        <p>population {country.population}</p>
        <img
          src={country.flags.png}
          height="100"
          alt={`flag of ${country.name.common}`}
        />
      </div>
    );
  }
};

const App = () => {
  const nameInput = useField("text");
  const [name, setName] = useState("");
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button type="submit">find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
