import React from "react";
import "./Css/Testimonials.css";

const testimonials = [
  {
    name: "Issac J.",
    review: "Fantastic service! My clothes always come back super clean and fresh.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Chioma A.",
    review: "Reliable and affordable. I love the convenience!",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dave O.",
    review: "Fast pickup and delivery. Honestly makes laundry so much easier for me.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Tunde B.",
    review: "Great customer services and affordable pricing. Highly recommend.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Aisha K.",
    review: "My clothes smell amazing every time. Super convenient service.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Blessing N.",
    review: "Excellent service. My clothes came back perfectly clean and pressed.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <div className="testimonials-title">
        <div className="line1"></div>
        <h1>What Our Customer Says</h1>
        <div className="line1"></div>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img src={item.image} alt={item.name} className="testimonial-img" />
            <div className="testimonial-content">
              <h3 className="testimonial-name">{item.name}</h3>
              <div className="testimonial-stars">{"★".repeat(item.stars)}</div>
              <p className="testimonial-text">"{item.review}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
