import React from 'react'
import "./Css/Services.css"
import Rectangle5 from "../assets/Rectangle 5.png"
import Rectangle6 from "../assets/Rectangle 6.png"
import Vector from "../assets/Vector (3).png"
const Services = () => {
  return (
    <main className='services-container'>
      <section className='services-wrapper'>
      <section className='services-left'>
       <div className="image-wrapper">
  <div className="img-large">
    <img src={Rectangle5} alt="" />
  </div>
  
  <div className="img-small">
    <img src={Rectangle6} alt="" />
  </div>
</div>
      </section>


      <section className='services-right'>
        <article className='services-right1'>
          <h2>Behind PrimePress Laundry <br />Company Stories</h2>
        </article>
        <article className='services-right2'>
          <p>At PrimePress laundry, we go beyond washing 
            <br />clothes... we deliver freshness, convenience, 
            <br />and care in every service.</p>
        </article>
        <article className='services-right3'>
          <article className='services-right3-text1'>
            <img src={Vector} alt="" />
            <p>Fresh clothes, Happy customers</p>
          </article>
          <article className='services-right3-text2'>
            <img src={Vector} alt="" />
            <p>Wash. Fold. Refresh</p>
          </article>
          <article className='services-right3-text3'>
            <img src={Vector} alt="" />
            <p>Sparkling Clean Every Time</p>
          </article>
          <article className='services-right3-text4'>
            <img src={Vector} alt="" />
            <p>Professional Laundry Care</p>
          </article>
        </article>
      </section>
      </section>
    </main>
  )
}

export default Services