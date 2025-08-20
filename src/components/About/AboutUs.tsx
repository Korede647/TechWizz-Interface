import React from "react";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <section className="about-container">
      <div className="about-content glass-card">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Welcome to our business! We are passionate about delivering high-quality
            solutions that bring value to our clients. Our team focuses on
            innovation, creativity, and customer satisfaction.
          </p>
          <p>
            We believe in building long-lasting relationships by providing
            excellent service, transparency, and results that matter.
          </p>
        </div>
        <div className="about-image">
          <img src="https://source.unsplash.com/500x500/?team,office" alt="Our Team" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
