import React from 'react'
import "./Css/Footer2.css"
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

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
                
            </article>
            <article className='footer2-help'></article>
            <article className='footer2-follow'></article>
        </section>
    </main>
  )
}

export default Footer2
