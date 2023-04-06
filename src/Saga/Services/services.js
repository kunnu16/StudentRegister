import axios from "axios";

export const userToken = async (data) => {
  const res = await axios.post("https://studentregisterbackened.onrender.com/user/login", data);
  return res.data;
};

export const signUp = async (data) => {
  const res = await axios.post("https://studentregisterbackened.onrender.com/user/register", data);
  return res.data;
};

export const dashBoardApi = async () => {
  const token = localStorage.getItem("Token");

  const res = await axios.get(
    "https://studentregisterbackened.onrender.com/user/get-dash-board-data",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return res.data;
};
