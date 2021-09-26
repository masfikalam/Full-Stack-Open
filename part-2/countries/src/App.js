import axios from "axios";
import React, { useEffect, useState } from "react";
import Details from "./Details";
import List from "./List";

const App = () => {
  const [term, setTerm] = useState("");
  const [show, setShow] = useState([]);
  const [open, setOpen] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3/all")
      .then((data) => setCountries(data.data));
  }, []);

  useEffect(() => {
    const newArr = [...countries];
    const filtered = newArr.filter((c) =>
      c.name.common.toLowerCase().includes(term.toLowerCase())
    );
    setShow(filtered);
  }, [term, countries]);

  return (
    <div>
      find countries <input onChange={(e) => setTerm(e.target.value)} />
      {term && <List show={show} setOpen={setOpen} />}
      {open.name && <Details country={open} />}
    </div>
  );
};

export default App;
