import React from 'react'
import "./Css/Home.css"
import Header from "../Components/Header.jsx"
import Hero from "../Components/Hero.jsx"
import Services from "../Components/Services.jsx"
import How from '../Components/How.jsx'
import WhyChooseUs from '../Components/WhyChooseUs.jsx'
import Testimonials from '../Components/Testimonials.jsx'


const Home = () => {
  return (
    <main className='home-container'>
        <Header />
        <Hero />
        < Services />
        <How/>
        <WhyChooseUs/>
        <Testimonials/>     
    </main>
  )
}

export default Home
