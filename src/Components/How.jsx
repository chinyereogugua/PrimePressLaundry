import React from 'react'
import './Css/How.css'

const How = () => {
  return (
    <section class="work-section">

    <div class="left-content">
        <h1>How We Work</h1>

        <p>
            Laundry Made Easy With Our <br/>
            Simple Process
        </p>

        <button>Schedule Now</button>
    </div>

    <div class="cards-container">

        <div class="work-card card-one">
            <span class="icon">🗓️</span>
            <h2>Schedule Pickup</h2>
            <p>Easy online booking</p>
        </div>

        <div class="work-card card-two">
            <span class="icon">🧺</span>
            <h2>We Wash & Fold</h2>
            <p>Expert Cleaning & folding</p>
        </div>

        <div class="work-card card-three">
            <span class="icon">🚚</span>
            <h2>Delivered to your Door</h2>
            <p>Back to you in 24 hours</p>
        </div>

    </div>

</section>
  )
}

export default How
