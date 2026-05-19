import React from 'react'
import "./Css/Home.css"
import Header from "../Components/Header.jsx"
import Hero from "../Components/Hero.jsx"

const Home = () => {
  return (
    <main className='home-container'>
        <Header />
        <Hero />
    </main>
  )
}

export default Home
