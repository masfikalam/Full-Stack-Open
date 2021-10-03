import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const postOne = async (anc) => {
  const res = await axios.post(baseUrl, { content: anc, votes: 0 });
  return res.data;
};

export const voteOne = async (id, obj) => {
  const res = await axios.put(`${baseUrl}/${id}`, obj);
  return res.data;
};
