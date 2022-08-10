import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles.css";

function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError(true);
    } else {
      try {
        await axios.post("/users/save", formData);
        navigate("/CreateEditProfile");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="form-container">
        <form className="main-form" onSubmit={handleSubmit}>
          <h2 className="form-header">Sign Up</h2>
          <label className="form-label" htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
          <label className="form-label" htmlFor="password">
            Password<span>*</span>
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
            required
          />
          <label className="form-label" htmlFor="password">
            Confirm Password<span>*</span>
          </label>
          <input
            className="form-input"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword || ""}
            onChange={handleChange}
            required
          />
          <input className="btn" type="submit" />
          <span className="links">
            <a className="register-link" href="/">
              Already have an account? Click here to login
            </a>
            {error && <p className="error">Passwords don't match!</p>}
          </span>
        </form>
      </div>
    </div>
  );
}
export default Register;
