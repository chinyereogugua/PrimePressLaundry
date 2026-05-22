import React from 'react'
import './Css/ServiceAndPricing.css'
import Header from '../Components/Header'
import OurLaundry from '../Components/OurLaundry'
import Cleaning from '../Components/Cleaning'
import Pricing from '../Components/Pricing'
import Faq from '../Components/Faq'
import Footer1a from '../Components/Footer1a.jsx'
import Footer2 from '../Components/Footer2.jsx'

const ServiceAndPricing = () => {
  return (
    <div className='serviceandpricing-container'>
      <Header/>
      <OurLaundry/>
      <Cleaning/>
      <Pricing/>
      <Faq/>
      <Footer1a />
      <Footer2 />
    </div>
  )
}

export default ServiceAndPricing
