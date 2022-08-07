import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Login({ setLoggedInUser }) {
  // clear localStorage on page load
  localStorage.clear();

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

    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch("/users/login", options);
    const data = await res.json();
    console.log("RESPONSE FROM SERVER: ", data);

    setLoggedInUser(data);

    if (data !== "" && data !== "Invalid credentials") {
      // reset local storage for new login
      localStorage.clear();

      // set local storage with user id & email
      localStorage.setItem("id", data.id);
      localStorage.setItem("email", data.email);

      // redirect
      navigate("/SingleProfileView");
    } else if (data === "Invalid credentials") {
      // reset form input
      setFormData("");
      // conditionally render error
      setError(true);
    }
  };

  return (
    <div className="form-container">
      <form class="main-form" onSubmit={handleSubmit}>
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
