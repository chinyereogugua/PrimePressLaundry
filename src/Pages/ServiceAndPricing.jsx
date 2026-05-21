import React from 'react'
import './Css/ServiceAndPricing.css'
import Header from '../Components/Header'
import OurLaundry from '../Components/OurLaundry'
import Cleaning from '../Components/Cleaning'
import Pricing from '../Components/Pricing'
import Faq from '../Components/Faq'

const ServiceAndPricing = () => {
  return (
    <div>
      <Header/>
      <OurLaundry/>
      <Cleaning/>
      <Pricing/>
      <Faq/>
    </div>
  )
}

export default ServiceAndPricing
