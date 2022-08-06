import React from "react";
import { useState } from "react";
import "../styles.css";

function CreatePost() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const userId = localStorage.getItem("id");

    // unpack previous values into a copy and update; return the copy
    setFormData((values) => ({ ...values, [name]: value }));
    setFormData((values) => ({ ...values, userId: userId }));
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

    const res = await fetch("/posts/save", options);
    const data = await res.json();

    setFormData("");
  };

  return (
    <div className="create-post-container">
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div>
          <label className="create-post-label" htmlFor="postText">
            What's going on?{" "}
          </label>
          <input
            className="create-post-input"
            type="textarea"
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="Post here..."
            required
          />
        </div>
        <input className="create-post-btn" type="submit" />
      </form>
    </div>
  );
}

export default CreatePost;
