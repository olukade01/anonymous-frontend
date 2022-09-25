import axios from "axios";
const baseUrl = "http://localhost:3002/api/message";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseUrl, config);
  return response.data;
};

const create = async (name, message) => {
  const response = await axios.post(`${baseUrl}/${name}`, message);
  return response.data;
};

export default { getAll, create, setToken };
