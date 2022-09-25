import axios from "axios";
const baseUrl = "http://localhost:3002/api/users/";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (userObject) => {
  const response = await axios.post(baseUrl, userObject);
  return response.data;
};

export default { getAll, create };