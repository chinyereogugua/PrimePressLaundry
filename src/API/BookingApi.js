import API from "./axios";


export const createBooking = async (data) => {
  const res = await API.post("/booking/book", data);

  console.log("BOOKING RESPONSE:", res);

  return res.data;
};

export const getAllBookings = async () => {
  const res = await API.get("/booking/allbooks");
  console.log("ALL BOOKINGS:", res);
  return res.data;
};