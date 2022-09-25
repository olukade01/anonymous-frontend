import axios from "axios";
const baseUrl = "http://localhost:3002/api/message";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = axios.get(baseUrl, config);
  return response.data;
};

const create = async (email, message) => {
  const response = await axios.post(`${baseUrl}/${email}`, message);
  return response.data;
};

export default { getAll, create, setToken };
