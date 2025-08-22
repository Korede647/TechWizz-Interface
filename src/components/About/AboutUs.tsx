import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-container">
      <div className="glass-hero">
        <h1 className="animate-fade-in">About Our Company</h1>
        <p className="animate-slide-up">Crafting excellence since 2010</p>
      </div>
      
      <div className="about-content">
        <div className="glass-card animate-fade-in">
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
              alt="Our Team" 
              className="about-image"
            />
          </div>
          <div className="text-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, our company began with a simple vision: to deliver exceptional 
              quality and service in every project we undertake. Over the years, we've grown 
              into a team of dedicated professionals who are passionate about what they do.
            </p>
            <p>
              Our commitment to innovation, sustainability, and client satisfaction has made 
              us a leader in our industry. We believe in building lasting relationships with 
              our clients through transparency and outstanding results.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card glass-card animate-slide-up">
              <h3>Excellence</h3>
              <p>We strive for the highest quality in everything we do, paying attention to every detail.</p>
            </div>
            <div className="value-card glass-card animate-slide-up">
              <h3>Innovation</h3>
              <p>We embrace new ideas and technologies to deliver cutting-edge solutions.</p>
            </div>
            <div className="value-card glass-card animate-slide-up">
              <h3>Integrity</h3>
              <p>We conduct business with honesty, transparency, and respect for all.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;