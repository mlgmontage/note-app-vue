import axios from "./instance";

const login = (data) => {
  return axios.post("users/signin", data);
};

export default login;
