import React from 'react'
import './Css/How.css'
import Button from "../Components/Button.jsx"
import { useNavigate } from 'react-router-dom'

const How = () => {
  const nav = useNavigate()

  return (
    <section className="work-section">

      <div className="left-content">
        <h1>How We Work</h1>

        <p>
          Laundry Made Easy With Our <br />
          Simple Process
        </p>

        <Button onClick={() => nav("/pick")} btnText="Schedule Now" />
      </div>

      <div className="cards-container">

        <div className="work-card card-one">
          <span className="icon">🗓️</span>
          <h2>Schedule Pickup</h2>
          <p>Easy online booking</p>
        </div>

        <div className="work-card card-two">
          <span className="icon">🧺</span>
          <h2>We Wash & Fold</h2>
          <p>Expert Cleaning & folding</p>
        </div>

        <div className="work-card card-three">
          <span className="icon">🚚</span>
          <h2>Delivered to your Door</h2>
          <p>Back to you in 24 hours</p>
        </div>

      </div>

    </section>
  )
}

export default How