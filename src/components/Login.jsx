import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Login({ setLoggedInUser }) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

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

    const res = await fetch("/users/login", options);
    const data = await res.json();

    console.log("Data from Server", data);
    setLoggedInUser(data);

    if (data !== "" && data !== "Invalid credentials") {
      // reset local storage
      localStorage.clear();

      // set local storage with user id
      localStorage.setItem("id", data.id);

      // redirect, with optional parameter for passing data via useLocation
      // navigate("/SingleProfileView", { state: data });
      navigate("/SingleProfileView");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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
          <a className="register-link" href="/Register">
            First time user? Sign up here
          </a>
        </span>
      </form>
    </div>
  );
}

export default Login;
