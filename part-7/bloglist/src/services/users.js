import axios from "axios";
const baseUrl = "https://bloglist-fso-2021.herokuapp.com/api/users";

export const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const getOne = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`);
  return res.data;
};

export const login = async (obj) => {
  const res = await axios.post(`${baseUrl}/login`, obj);
  return res.data;
};
