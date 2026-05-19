import React from 'react'
import "./Css/Services.css"

const Services = () => {
  return (
    <main className='services-container'>

        <section className='services-wrapper'>

            <div className='services-image-section'>

                <div className='main-image'>
                    <img
                    src='https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=1200&auto=format&fit=crop'
                    alt='Laundry Woman'
                    />
                </div>

                <div className='small-image'>
                    <img
                    src='https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop'
                    alt='Laundry Service'
                    />
                </div>

            </div>

            <div className='services-text-section'>

                <h1>
                    Behind PrimePress Laundry  <br />                  
                    Company Stories
                </h1>

                <p>
                    At PrimePress laundry, we go beyond washing
                    clothes... we deliver freshness, convenience,
                    and care in every service.
                </p>

                <div className='services-points'>

                    <div className='point'>
                        <span>✓</span>
                        <p>Fresh clothes, Happy customers</p>
                    </div>

                    <div className='point'>
                        <span>✓</span>
                        <p>Wash. Fold. Refresh</p>
                    </div>

                    <div className='point'>
                        <span>✓</span>
                        <p>Sparkling Clean Every Time</p>
                    </div>

                    <div className='point'>
                        <span>✓</span>
                        <p>Professional Laundry Care</p>
                    </div>

                </div>

            </div>

        </section>

    </main>
  )
}

export default Services