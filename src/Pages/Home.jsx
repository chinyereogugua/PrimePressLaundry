import React from 'react'
import "./Css/Home.css"
import Header from "../Components/Header.jsx"
import Hero from "../Components/Hero.jsx"
import Services from "../Components/Services.jsx"
import How from '../Components/How.jsx'
import WhyChooseUs from '../Components/WhyChooseUs.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import Footer1 from "../Components/Footer1.jsx"
import Footer2 from "../Components/Footer2.jsx"

const Home = () => {
  return (
    <main className='home-container'>
        <Header />
        <Hero />
        < Services />
        <How/>
        <WhyChooseUs/>
        <Testimonials/>     
        <Footer1 />
        <Footer2 />
    </main>
  )
}

export default Home
