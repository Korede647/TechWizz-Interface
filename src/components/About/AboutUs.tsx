import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <div className="about-container">
      <div className="glass-hero">
        <h1 className="animate-fade-in">About Our Company</h1>
        <p className="animate-slide-up">Crafting excellence since 2010</p>
        <div className="hero-buttons">
          <button className="cta-button primary">Our Services</button>
          <button className="cta-button secondary">Meet The Team</button>
        </div>
      </div>
      
      <div className="about-content">
        <div className="glass-card animate-fade-in">
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
              alt="Our Team" 
              className="about-image"
            />
            <div className="image-overlay">
              <p>Our dedicated team of professionals</p>
            </div>
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
            <div className="stats-container">
              <div className="stat">
                <h3>250+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            {[
              { id: 1, title: "Excellence", desc: "We strive for the highest quality in everything we do, paying attention to every detail.", icon: "⭐" },
              { id: 2, title: "Innovation", desc: "We embrace new ideas and technologies to deliver cutting-edge solutions.", icon: "💡" },
              { id: 3, title: "Integrity", desc: "We conduct business with honesty, transparency, and respect for all.", icon: "🤝" },
              { id: 4, title: "Collaboration", desc: "We believe in the power of teamwork and building strong partnerships.", icon: "👥" },
              { id: 5, title: "Sustainability", desc: "We're committed to environmentally responsible practices.", icon: "🌱" },
              { id: 6, title: "Growth", desc: "We continuously learn and improve to better serve our clients.", icon: "📈" }
            ].map((value, index) => (
              <div 
                key={value.id}
                className={`value-card glass-card animate-slide-up ${activeValue === value.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveValue(value.id)}
                onMouseLeave={() => setActiveValue(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
                <button className="value-learn-more">Learn More</button>
              </div>
            ))}
          </div>
        </div>

        <div className="team-preview glass-card">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "Michael Chen", role: "Chief Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "Emily Rodriguez", role: "Creative Director", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
            ].map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.img} alt={member.name} />
                  <div className="member-overlay">
                    <button>View Profile</button>
                  </div>
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
          <button className="view-all-team">View Full Team</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;