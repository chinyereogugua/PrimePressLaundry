import React, { useState } from 'react'
import "./Css/Booking.css"
import Input from "../Components/Input.jsx"
import Contacthead from "../assets/Contacthead.png"
import Phonecall from "../assets/Phonecall.png"
import Address from "../assets/Address.png"
import Button from "../Components/Button.jsx"
import Vector10 from "../assets/Vector10.png"
import Womanwithbasket from "../assets/Womanwithbasket.png"
import Happyman from "../assets/Happyman.png"
import Youngcouple from "../assets/Youngcouple.png"
import { toast } from 'react-toastify'
import { createBooking } from '../API/BookingApi.js'


const Booking = () => {
   const [bookingInfo, setBookingInfo] = useState({
    name: "",
    phoneNumber: "",
    pickUpAddress: "",
    pickUpDateAndTime: "",
    specialInstructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBookingInfo({...bookingInfo, [name]: value,});
    console.log("name", name)
    console.log("value", value)
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const data = {
      name: bookingInfo.name,
      phoneNumber: bookingInfo.phoneNumber,
      pickUpAddress: bookingInfo.pickUpAddress,
      pickUpDateAndTime: bookingInfo.pickUpDateAndTime,
      specialInstructions:
      bookingInfo.specialInstructions.trim() || "No special instructions",
    };

      console.log("SUBMIT DATA:", data);

      const res = await createBooking(data);
      console.log("FULL RESPONSE:", res);
      console.log("MESSAGE:", res.message);

      toast.success(res.message);
      setBookingInfo({
        name: "",
        phoneNumber: "",
        pickUpAddress: "",
        pickUpDateAndTime: "",
        specialInstructions: "",
      });

    } catch (error) {
      console.log("ERROR RESPONSE:", error.response);
      console.log("ERROR DATA:", error.response?.data);
      console.log("ERROR MESSAGE:", error.response?.data?.message);

      toast.error(
        error.response?.data?.message ||
        error.message
      );
    }
  };


  return (
    <main className='booking-container'>
      <section className='booking-left'>

        <form className='booking-left-holder' onSubmit={handleBooking}>
          <article className='booking-top'>
            <article className='booking-top1'>
              <article className='booking-top-heading'>
                <h2>Book Our Laundry Pickup</h2>
                <p>Fill out the form below to schedule your laundry pickup.</p>
              </article>

              <article className='booking-top-input'>
                <article className='booking-top-input1'>
                  <img src={Contacthead} alt="" />
                  <Input
                    placeholder="Name"
                    className="booking-top-input1a"
                    name="name"
                    value={bookingInfo.name}
                    onChange={handleChange}
                  />
                </article>

                <article className='booking-top-input2'>
                  <img src={Phonecall} alt="" />
                  <Input
                    placeholder="Phone Number"
                    className="booking-top-input2a"
                    name="phoneNumber"
                    value={bookingInfo.phoneNumber}
                    onChange={handleChange}
                  />
                </article>

                <article className='booking-top-input3'>
                  <img src={Address} alt="" />
                  <Input
                    placeholder="Address"
                    className="booking-top-input3a"
                    name="pickUpAddress"
                    value={bookingInfo.pickUpAddress}
                    onChange={handleChange}
                  />
                </article>
              </article>

              <article className='booking-top-date-time'>
                <p>Pickup Date & Time</p>
                {/* <h1></h1> */}
                <Input 
                type="datetime-local"
                className="booking-top-date-time-input"
                name="pickUpDateAndTime"
                value={bookingInfo.pickUpDateAndTime}
                onChange={handleChange}
                />
              </article>

              <article className='booking-top-special-instruction'>
                <p>Special Instructions <span>(Optional)</span></p>
                <textarea 
                placeholder="Any specific instructions for our team?"
                 className="booking-top-special-instruction-input"
                 name="specialInstructions"
                 value={bookingInfo.specialInstructions}
                 onChange={handleChange}
                 ></textarea>
              </article>

              <article className='booking-top-button'>
                <Button 
                className="booking-top-button1" 
                btnText="Sumbit"
                type="sumbit"
                />
              </article>
            </article>
          </article>

          <article className='booking-bottom'>
            <img src={Vector10} alt="" />
            <p>We respect your privacy and ensure your data is secure.</p>
          </article>
        </form>
      </section>

      <section className='booking-right'>
    <article className='booking-top-text'>
        <div className='booking-text-row'>
            <span className='check-icon'>✓</span>
            <p>Free Pickup & Delivery</p>
        </div>
        <div className='booking-text-row'>
            <span className='check-icon'>✓</span>
            <p>Satisfaction Guaranteed</p>
        </div>
    </article>
    <article className='booking-img img1'>
        <img src={Womanwithbasket} alt="" />
    </article>
    <article className='booking-img img2'>
        <img src={Happyman} alt="" />
    </article>
    <article className='booking-img img3'>
        <img src={Youngcouple} alt="" />
    </article>
</section>
    </main>
  )
}

export default Booking