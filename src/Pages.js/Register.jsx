import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles.css";

const URL = "http://localhost:3030";
function Register() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(`${URL}/users/save`, options);
    const data = await res.json();
    console.log("Data from Server", data);
    // TODO Redirect user to profile creation page
  };
  return (
    <div>
      <Header />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-header">Sign Up</h2>
          <label className="form-label" for="email">
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
          <label className="form-label" for="password">
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
          <label className="form-label" for="password">
            Confirm Password<span>*</span>
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
            required
          />
          <input className="btn" type="submit" />
          <span className="links">
            <a href="/">Already have an account? Click here to login</a>
          </span>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default Register;
