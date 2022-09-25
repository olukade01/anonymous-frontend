import axios from "axios";
const baseUrl = "http://localhost:3002/api/login";

const create = async (userObject) => {
  const response = await axios.post(baseUrl, userObject);
  return response.data;
};

export default create;
