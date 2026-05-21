import React, { useState } from 'react'
import './Css/Faq.css'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    { question: 'How long does delivery take?', answer: 'Delivery typically takes 2–3 business days depending on your location.' },
    { question: 'Do you handle delicate fabrics?', answer: 'Yes, we take special care with delicate materials using gentle cleaning methods.' },
    { question: 'Which areas do you cover?', answer: 'We currently serve all major districts within the city and surrounding suburbs.' },
    { question: 'Do you offer same-day service?', answer: 'Same-day service is available for select items if booked before noon.' }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-section">
      <div className="faq-left">
        <h3 className="faq-subtitle">FAQ</h3>
        <h2 className="faq-title">Frequently Asked <br/> Questions</h2>
      </div>

      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-icon">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
