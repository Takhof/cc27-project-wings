import React from "react";
import { useState } from "react";
import "../styles.css";

function CreatePost() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const userId = localStorage.getItem("id");

    setFormData((values) => ({ ...values, [name]: value }));
    setFormData((values) => ({ ...values, userId: userId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // add userId
    console.log("formData INCLUDING ID?:", formData);

    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch("/posts/save", options);
    const data = await res.json();

    console.log("Data from Server", data);
  };

  return (
    <div className="create-post-container">
      {/* <h3 className="create-post-header">Post Here:</h3> */}
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
        {/* <div>
          <label className="create-post-label" htmlFor="userId">
            User ID:{" "}
          </label>
          <input
            className="create-post-input"
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div> */}
        <input className="create-post-btn" type="submit" />
      </form>
    </div>
  );
}

export default CreatePost;
