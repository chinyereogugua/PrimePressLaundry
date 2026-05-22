import React from 'react'
import "./Css/Header.css"
import Container from "../assets/Container.png"
import Button from "../Components/Button.jsx"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const nav = useNavigate();
  return (
    <main className='header-container'>
        <section className='header-wrapper'>
            <article className='header-left'>
                <img src={Container} alt="" />
                <h2 className='header-left1'>PrimePress</h2>
                <h2 className='header-left2'>Laundry</h2>
            </article>
            <article className='header-middle'>
                <h2 className='header-middle1' onClick={() => nav('/')}>Home</h2>
                <h2 className='header-middle2' onClick={() => nav("/service")}>Service & Pricing</h2>
                <h2 className='header-middle2' onClick={() => nav("/pick")}>Pickup</h2>
            </article>
            <article className='header-right'>
                <h2>Sign Up</h2>
                <Button className="header-right-btn" onClick={()=> nav("/pick")} btnText="Book Now" />
            </article>
        </section>
    </main>
  )
}

export default Header
