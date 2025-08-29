import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./forgotpassword.css";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required!");
      setMessage(null);
      return;
    }

    // Simulated reset flow
    if (email === "test@example.com") {
      setMessage("Password reset link has been sent to your email!");
      setError(null);

      // Simulate redirect after success
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setError("No account found with this email.");
      setMessage(null);
    }
  };

  return (
    <div className="forgot-password-section">
      <div className="forgot-password-container">
        <h2 className="forgot-password-header">Forgot Password</h2>
        <p className="forgot-password-subheader">Please enter your email address to reset your password.</p>

        <form onSubmit={handleSubmit} autoComplete="off" className="forgot-password-form">
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input className="email"
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoFocus
            />
          </div>

          <button type="submit" className="submit-button">Send Reset Link</button>
        </form>

        <div className="forgot-footer">
          <p>
            Remembered your password? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
