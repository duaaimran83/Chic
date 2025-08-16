import React from "react";
import "./ContactUs.css";
import Slider1 from "../assets/Slider1.jpg";

const ContactUs = () => (
  <div className="contact-container">
    <div className="background-image">
      <img src={Slider1} alt="Contact Background" />
    </div>
    <div className="contact-overlay">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h3>Address</h3>
              <p>Lahore, Punjab, Pakistan</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>calisto.pk@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+92 334 6444495</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-clock"></i>
            <div>
              <h3>Hours</h3>
              <p>Monday to Saturday 10am - 8pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs; 