import axios from "axios";
const baseURL = "http://localhost:8000/persons";

const addContact = (obj) => axios.post(baseURL, obj);

const deleteContact = (id) => axios.delete(`${baseURL}/${id}`);

const updateContact = (id, obj) => axios.put(`${baseURL}/${id}`, obj);

export { addContact, deleteContact, updateContact };
