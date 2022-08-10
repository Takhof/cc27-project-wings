import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Login() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLink = (e) => {
    navigate("/Register");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/users/login", formData);
      navigate("/SingleProfileView");
    } catch (error) {
      console.log(error);
      // reset form input
      setFormData("");
      // conditionally render error
      setError(true);
    }
  };

  return (
    <div className="form-container">
      <form className="main-form" onSubmit={handleSubmit}>
        <h2 className="form-header">Login</h2>
        <div className="form-item">
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
        </div>
        <div className="form-item">
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
          />{" "}
        </div>
        <input className="btn" type="submit" />
        <span className="links">
          <a className="register-link" onClick={handleLink}>
            First time user? Sign up here
          </a>
          {error && (
            <p className="error">Login details incorrect, please try again!</p>
          )}
        </span>
      </form>
    </div>
  );
}

export default Login;
