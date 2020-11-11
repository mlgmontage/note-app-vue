import axios from "./instance";
const token = localStorage.getItem("token");

const getNotes = () => {
  return axios.get("notes/", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export default getNotes;
