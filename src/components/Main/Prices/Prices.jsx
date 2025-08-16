import React, { useEffect, useState } from 'react';
import "./Prices.css";
import testimonialsData from "../../../Data/testimonials.json";

const Prices = () => {
  const [data, setData] = useState({ title: '', description: '', testimonials: [] });

  useEffect(() => {
    setData(testimonialsData);
  }, []);

  return (
    <div className="prices">
      <div className="title">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div className="box-container">
        {data.testimonials.map(testimonial => (
          <div className="box" key={testimonial.id}>
            <span>{testimonial.name}</span>
            <h3>{testimonial.role}</h3>
            <ul>
              <li>{testimonial.comment}</li>
            </ul>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;