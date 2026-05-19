import React from 'react'
import "./Css/Home.css"
import Header from "../Components/Header.jsx"
import Hero from "../Components/Hero.jsx"
import Services from "../Components/Services.jsx"

const Home = () => {
  return (
    <main className='home-container'>
        <Header />
        <Hero />
        < Services />
    </main>
  )
}

export default Home
