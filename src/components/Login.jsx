import React from "react";
import { useState } from "react";
import "../styles.css";

function Login() {
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

    const res = await fetch("/users/login", options);
    const data = await res.json();

    // TODO Redirect user to profile creation page
    console.log("Data from Server", data);
  };

  return (
    <div className="whole">
      <h2>Login</h2>
      <span className="linkers">
        <br />
        <a href="/CreateProfile">Create Profile/Edit</a>
        <br />
        <a href="/Directory">Directory</a>
        <a href="/Contact">Contact</a>
      </span>

      <form onSubmit={handleSubmit}>
        <span classname="pass">
          <label for="email">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
        </span>
        <label for="password">Password*</label>
        <input
          type="password"
          name="password"
          value={formData.password || ""}
          onChange={handleChange}
          required
        />{" "}
        <input type="submit" />
        <span className="links">
          <a href="/Register">Dont have an Account, Sign up here</a>
          <a href="/CreateProfile">Create Profile/Edit</a>
          <a href="/Directory">Directory</a>
          <a href="/Contact">Contact us</a>
        </span>
      </form>
    </div>
  );
}

export default Login;
