import React from 'react'
import "./Css/Footer2.css"
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Vector4 from "../assets/Vector (4).png"
import Instagram from "../assets/Instagram.jpg"
import Vector5 from "../assets/Vector (5).png"
const Footer2 = () => {
  return (
    <main className='footer2-container'>
        <section className='footer2-wrapper'>
            <article className='footer2-about'>
                <h2>ABOUT US</h2>
                <p>Delivery Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Condition</p>
                <p>Contact us</p>
            </article>
            <article className='footer2-official'>
                <h2>OFFICIAL INFO</h2>
                <article className='footer2-official1'>
                <FaEnvelope className='footer2-official-icon'/>
                <p>Primepress@gmail.com</p>
                </article>
                 <article className='footer2-official2'>
                <FaMapMarkerAlt className='footer2-official2-icon'/>
                <p>No 5, Idown Lane, Ikeja Lagos</p>
                </article>
            </article>
            <article className='footer2-open'>
                <h2>OPEN HOURS</h2>
                <p>Mon - Sat: 9 am - 7 pm</p>
                <p>Sunday: Closed</p>
            </article>
            <article className='footer2-help'>
                <h2>HELP & SUPPORT</h2>
                <p>Contact Us</p>
                <p>Chat 24/7 Services</p>
            </article>
            <article className='footer2-follow'>
                <h2>FOLLOW US</h2>
                <article className='footer2-follow1'>
                <img src={Vector4} alt="" />
                <img src={Instagram} alt="" />
                <img src={Vector5} alt="" />
                </article>
            </article>
        </section>
    </main>
  )
}   

export default Footer2
