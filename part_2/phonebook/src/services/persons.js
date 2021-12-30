import axios from "axios";

const url = "http://localhost:3001/persons/";

const getAll = () => {
  return axios.get(url).then((response) => response.data);
};

const create = (newObj) => {
  return axios.post(url, newObj).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${url}${id}`);
};

const edit = (id, newObj) => {
  return axios.put(`${url}${id}`, newObj).then((response) => response.data);
};

export default { getAll, create, deletePerson, edit };
