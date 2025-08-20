import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="page-container">
      <header className="header animate-fade-in">
        <h1>About Us</h1>
        <p className="subtitle">Discover our story and what drives us forward</p>
      </header>

      <section className="intro-section">
        <div className="intro-content animate-slide-left">
          <h2>Our Mission</h2>
          <p>
            At [Your Business Name], we are dedicated to delivering innovative solutions that empower businesses to thrive in a digital world. With a focus on excellence and customer satisfaction, our team works tirelessly to create value and drive success.
          </p>
        </div>
        <div className="intro-image animate-slide-right">
          <img src="https://via.placeholder.com/600x400?text=Company+Image" alt="Company Overview" />
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title animate-fade-in">Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card glass-effect animate-hover">
            <img src="https://via.placeholder.com/300x300?text=Team+Member+1" alt="Team Member 1" className="team-image" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card glass-effect animate-hover">
            <img src="https://via.placeholder.com/300x300?text=Team+Member+2" alt="Team Member 2" className="team-image" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-card glass-effect animate-hover">
            <img src="https://via.placeholder.com/300x300?text=Team+Member+3" alt="Team Member 3" className="team-image" />
            <h3>Mike Johnson</h3>
            <p>Lead Designer</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-title animate-fade-in">Our Core Values</h2>
        <ul className="values-list">
          <li className="value-item animate-slide-up">Innovation: Pushing boundaries to create cutting-edge solutions.</li>
          <li className="value-item animate-slide-up" style={{ animationDelay: '0.2s' }}>Integrity: Building trust through honesty and transparency.</li>
          <li className="value-item animate-slide-up" style={{ animationDelay: '0.4s' }}>Excellence: Committed to delivering the highest quality in everything we do.</li>
        </ul>
      </section>

     
    </div>
  );
};

export default AboutUs;