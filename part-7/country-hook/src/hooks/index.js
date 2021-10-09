import { useEffect, useState } from "react";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        data.message
          ? setCountry({ found: false })
          : setCountry({ ...data[0], found: true });
      });
  }, [name]);

  return country;
};
