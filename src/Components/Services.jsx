import React from 'react'
import "./Css/Services.css"
import Rectangle5 from "../assets/Rectangle 5.png"
import Rectangle6 from "../assets/Rectangle 6.png"
const Services = () => {
  return (
    <main className='services-container'>
      <section className='services-wrapper'>
      <section className='services-left'>
       <div class="image-wrapper">
  <div class="img-large">
    <img src={Rectangle5} alt="" />
  </div>
  
  <div class="img-small">
    <img src={Rectangle6} alt="" />
  </div>
  
  <div class="accent-line"></div>
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
        <article className='services-right3'></article>
      </section>
      </section>
    </main>
  )
}

export default Services
