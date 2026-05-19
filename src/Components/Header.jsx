import React from 'react'
import "./Css/Header.css"
import Container from "../assets/Container.png"
import Button from "../Components/Button.jsx"
const Header = () => {
  return (
    <main className='header-container'>
        <section className='header-wrapper'>
            <article className='header-left'>
                <img src={Container} alt="" />
                <h2 className='header-left1'>PrimePress</h2>
                <h2 className='header-left2'>Laundry</h2>
            </article>
            <article className='header-middle'>
                <h2 className='header-middle1'>Home</h2>
                <h2 className='header-middle2'>Service & Pricing</h2>
                <h2 className='header-middle2'>Pickup</h2>
            </article>
            <article className='header-right'>
                <h2>Sign Up</h2>
                <Button className="header-right-btn" btnText="Book Now" />
            </article>
        </section>
    </main>
  )
}

export default Header
