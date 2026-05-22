import React from 'react'
import "./Css/Primepresslaundrylogo.css"
import Primepresslogo from "../assets/Primepresslogo.png"

const Primepresslaundrylogo = () => {
  return (
    <main className='primepresslogo'>
        <section className='primepresslogo-left'>
            <img src={Primepresslogo} alt="" />
        </section>
        <section className='primepresslogo-right'>
            <h1>PrimePress <br />Laundry Admin</h1>
        </section>
    </main>
  )
}

export default Primepresslaundrylogo
