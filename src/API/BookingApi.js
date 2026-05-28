import API from "./axios";


export const createBooking = async (data) => {
  const res = await API.post("/booking/book", data);

  console.log("BOOKING RESPONSE:", res);

  return res.data;
};