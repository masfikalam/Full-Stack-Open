import axios from "axios";
const baseUrl = "https://bloglist-fso-2021.herokuapp.com/api/blogs";

export const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const getOne = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`);
  return res.data;
};

export const postBlog = async (obj) => {
  const user = localStorage.getItem("user");
  const token = JSON.parse(user).token;
  const res = await axios.post(baseUrl, obj, {
    headers: { Authorization: token },
  });
  return res.data;
};

export const likeBlog = async (id, obj) => {
  const res = await axios.put(`${baseUrl}/${id}`, obj);
  return res.data;
};

export const commentBlog = async (id, obj) => {
  const res = await axios.put(`${baseUrl}/${id}/comment`, obj);
  return res.data;
};

export const removeBlog = async (id) => {
  const user = localStorage.getItem("user");
  const token = JSON.parse(user).token;
  const res = await axios.delete(`${baseUrl}/${id}`, {
    headers: { Authorization: token },
  });
  return res.data;
};
