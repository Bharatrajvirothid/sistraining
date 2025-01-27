
import React from 'react';
import './AboutBackGround.css'; // Import the CSS file

const AboutBackGround = () => {
  return (
    <div className="hero-container">
      <div className="content-wrapper">
        <h2>Get In Touch</h2>
        <h1>Best Medical & Health Care Near Your City</h1>
        <p>We’ve 25 Years of experience in Medical Services.</p>
        <div className="buttons">
          <button className="contact-btn">Contact Us</button>
          <button className="doctors-btn">Doctors List</button>
        </div>
      </div>
      <div className="play-button-wrapper">
        <div className="play-button">
          <span className="play-icon">&#9658;</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBackGround;
