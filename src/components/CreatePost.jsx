import React, { useEffect } from "react";
import { useState } from "react";
import "../styles.css";
import axios from "axios";

function CreatePost() {
  const [formData, setFormData] = useState({});
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/cookie/payload");
        const { userId } = response.data;
        setLoggedInUserId(userId);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // unpack previous values into a copy and update; return the copy
    setFormData((values) => ({ ...values, [name]: value }));
    setFormData((values) => ({ ...values, userId: loggedInUserId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axios.post("/posts/save", formData);
      setFormData("");
    } catch (error) {
      console.log(error);
    }
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
            value={formData.text || ""}
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
