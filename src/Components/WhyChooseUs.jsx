import React from 'react'
import './Css/WhyChooseUs.css'
import {
  Clock3,
  Wallet,
  Recycle,
  ThumbsUp
} from 'lucide-react'

const WhyChooseUs = () => {

  const features = [
    {
      icon: <Clock3 size={38} />,
      title: '24- Hours Delivery',
      description: 'Quick turn around time.'
    },

    {
      icon: <Wallet size={38} />,
      title: 'Affordable Pricing',
      description: 'Best rates in town.'
    },

    {
      icon: <Recycle size={38} />,
      title: 'Eco-Friendly Products',
      description: 'Safe for you & the environment.'
    },

    {
      icon: <ThumbsUp size={38} />,
      title: 'Trusted by 1,000+ Customers',
      description: 'Top-rated Service'
    }
  ]

  return (
    <section className='whyChooseUs'>

      <div className='whyChooseUsTitle'>
        <div className='line'></div>

        <h1>Why Choose Us?</h1>

        <div className='line'></div>
      </div>


      <div className='whyChooseUsContainer'>

        {
          features.map((feature, index) => (
            <div className='whyChooseUsCard' key={index}>

              <div className='icon'>
                {feature.icon}
              </div>

              <h2>{feature.title}</h2>

              <p>{feature.description}</p>

            </div>
          ))
        }

      </div>

    </section>
  )
}

export default WhyChooseUs;