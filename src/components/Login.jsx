import React from "react";
import { useState } from "react";
import "../styles.css";

function Login({setLoggedInUser}) {
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

    setLoggedInUser(data);

    // TODO Redirect user to profile creation page
    console.log("Data from Server", data);
  };

  return (
    <div className="whole">
      <h2>Login</h2>
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
          <a href="/Register">First time user? Sign up here</a>
        </span>
      </form>
    </div>
  );
}

export default Login;
