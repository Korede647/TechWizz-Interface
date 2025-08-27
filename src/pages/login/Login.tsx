import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login: React.FC = () => {
  const [form, setForm] = useState({ email: "", password: "", rememberMe: false });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.email === "test@example.com" && form.password === "123456") {
      if (form.rememberMe) {
        localStorage.setItem("user", JSON.stringify(form));
      } else {
        sessionStorage.setItem("user", JSON.stringify(form));
      }
      navigate("/userdashboard");
    } else {
      setError("Invalid email or password. Try again!");
    }
  };

  return (
    <div className="login-section">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              autoFocus
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <div className="form-checks">
            <label className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={form.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </label>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="login-footer">
          <p>
            Don’t have an account? <Link to="/signup">Sign up here!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
