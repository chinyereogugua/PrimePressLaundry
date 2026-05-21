import React from 'react'
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
const Booking = () => {
  return (
    <main className='booking-container'>
      <section className='booking-left'>
        <article className='booking-left-holder'>
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
                  />
                </article>
                <article className='booking-top-input2'>
                  <img src={Phonecall} alt="" />
                  <Input
                    placeholder="Phone Number"
                    className="booking-top-input2a"
                  />
                </article>

                <article className='booking-top-input3'>
                  <img src={Address} alt="" />
                  <Input
                    placeholder="Address"
                    className="booking-top-input3a"
                  />
                </article>
              </article>
              <article className='booking-top-date-time'>
                <p>Pickup Date & Time</p>
                <h1></h1>
              </article>
              <article className='booking-top-special-instruction'>
                <p>Special Instructions <span>(Optional)</span></p>
                <textarea placeholder="Any specific instructions for our team?"
                 className="booking-top-special-instruction-input"></textarea>
              </article>
              <article className='booking-top-button'>
                <Button className="booking-top-button1" btnText="Sumbit"/>
              </article>
            </article>
          </article>
          <article className='booking-bottom'>
            <img src={Vector10} alt="" />
            <p>We respect your privacy and ensure your data is secure.</p>
          </article>
        </article>
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