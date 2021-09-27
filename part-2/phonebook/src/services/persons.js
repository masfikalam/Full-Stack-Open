import axios from "axios";
const baseURL = "https://phonebook-fso-2021.herokuapp.com/api/persons";

const getContacts = () => axios.get(baseURL);

const addContact = (obj) => axios.post(baseURL, obj);

const deleteContact = (id) => axios.delete(`${baseURL}/${id}`);

const updateContact = (id, obj) => axios.put(`${baseURL}/${id}`, obj);

export { getContacts, addContact, deleteContact, updateContact };
