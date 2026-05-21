import React from 'react'
import "./Css/Hero3.css"
import Ellipse  from "../assets/Ellipse 48 (2).png"
import Vector from "../assets/Vector (3).png"
import Manwithbasket from "../assets/Manwithbasket.png"

const Hero3 = () => {
  return (
    <main className='hero3-container'>
        <section className='hero3-left'>
         <article className="hero-left-img">
         <img src={Ellipse} alt="" />
        </article>
        <article className='hero3-left-content'>
            <h1>Schedule Your <br />Laundry Pickup</h1>
            <h2>Convenient and  reliable laundry 
                <br /> 
            service at your doorstep.
            </h2>
        </article>
         <article className='hero3-left-text'>
                  <article className='hero3-left-text1'>
                    <img src={Vector} alt="" />
                    <p>Free Pickup & Delivery</p>
                  </article>
                  <article className='hero3-left-text2'>
                    <img src={Vector} alt="" />
                    <p>Satisfaction Guaranteed</p>
                  </article>
                </article>
        </section>
        <section className='hero3-right'>
            <article className='hero3-right-holder'>
                <img src={Manwithbasket} alt="" />
            </article>
        </section>
    </main>
  )
}

export default Hero3