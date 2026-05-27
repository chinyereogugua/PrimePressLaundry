import API from "./axios";

export const signupAdmin = async (data) => {
  const response = await API.post("/admin/signUp", data);
  return response.data;
};

export const forgetPassword = async (data) => {
  const res = await API.post("/admin/forget-password", data);
  console.log("res", res);
  return res.data;
}

export const forgetPasswordOTP = async (data) => {
  const res = await API.post("/admin/verifyEmail", data);
  console.log("res", res);
  return res.data;
}

export const resetPassword = async (data) => {
  const res = await API.post("/admin/reset-password", data)
  console.log("res", res);
  return res.data
}