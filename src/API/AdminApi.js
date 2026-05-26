import API from "./axios";

export const signupAdmin = async (data) => {
  const response = await API.post("/admin/signUp", data);
  return response.data;
};