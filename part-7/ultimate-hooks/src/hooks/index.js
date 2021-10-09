import axios from "axios";
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

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((data) => setResources(data.data));
  }, [baseUrl]);

  const create = async (resource) => {
    await axios.post(baseUrl, resource);
  };

  const service = {
    create,
  };

  return [resources, service];
};
