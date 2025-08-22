import React from 'react';
import './ContactUs.css';

const ContactUs: React.FC = () => {
  return (
    <div className="page-container">
      <header className="header animate-fade-in">
        {/* <h1>Contact Us</h1> */}
        <p className="subtitle">Get in touch with us for any inquiries or support</p>
      </header>

      <section className="contact-info-section">
        <div className="contact-details glass-effect animate-slide-left">
          <h2>Our Contact Details</h2>
          <p><strong>Address:</strong> 123 Business Street, City, State, ZIP Code</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@yourbusiness.com</p>
        </div>
        <div className="contact-map animate-slide-right">
          <img src="https://via.placeholder.com/600x400?text=Map+Placeholder" alt="Location Map" />
        </div>
      </section>

      <section className="contact-form-section">
        <h2 className="section-title animate-fade-in">Send Us a Message</h2>
        <form className="contact-form glass-effect">
          <input type="text" placeholder="Your Name" className="form-input animate-fade-in" style={{ animationDelay: '0.1s' }} />
          <input type="email" placeholder="Your Email" className="form-input animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <textarea placeholder="Your Message" className="form-textarea animate-fade-in" style={{ animationDelay: '0.3s' }}></textarea>
          <button type="submit" className="form-button animate-hover">Submit</button>
        </form>
      </section>

    </div>
  );
};

export default ContactUs;