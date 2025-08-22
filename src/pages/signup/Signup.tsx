import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup: React.FC = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    phone: '',
    address: '',
    terms: false,
    privacy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value
    }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Signup completed!');
  };

  return (
    <div className="signup-section">
      <div className="signup-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  title="Email Address"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  title="Password"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  title="Confirm Password"
                  placeholder="Re-enter your password"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  title="First Name"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  title="Last Name"
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label>Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  required
                  title="Date of Birth"
                  placeholder="Select your date of birth"
                />
              </div>
              <div>
                <label>Gender:</label>
                <select name="gender" value={form.gender} onChange={handleChange} required title="Gender">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  title="Phone Number"
                />
              </div>
              <div>
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  title="Address"
                />
              </div>
              <div className="terms">
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  title="Agree to terms and conditions"
                  placeholder="Agree to terms and conditions"
                />
                <label htmlFor="terms">I agree to the terms and conditions</label>
              </div>
              <div className="privacy-policy">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={form.privacy}
                  onChange={handleChange}
                  title="Privacy Policy Agreement"
                  placeholder="Agree to privacy policy"
                />
                <label htmlFor="privacy">I agree to the privacy policy</label>
              </div>
            </>
          )}

          <div className="form-navigation">
            {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
            {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
            {step === 3 && <button type="submit" className='submit'>Submit</button>}
          </div>
        </form>
        <div className="login">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
