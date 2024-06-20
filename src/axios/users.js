import axios from "axios";

export const getAllUsers = async () => {
  try {
    const res = await axios.get("http://localhost:8080/users/get-users");
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
