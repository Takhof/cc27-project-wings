import React from "react";
import { useState } from "react";

const URL = "http://localhost:3030";

function CreatePost() {
  const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
    // add userId
		console.log("formData:", formData);

		const options = {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		};

		const res = await fetch(`${URL}/posts/save`, options);
		const data = await res.json();

		console.log("Data from Server", data);
  };

	return (
		<div>
      <h3>CreatePost Component</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="postText">Post: </label>
				<input
					type="textarea"
					name="text"
					value={formData.text}
					onChange={handleChange}
          placeholder="How are you feeling today?"
					required
				/>
        <label htmlFor="userId">User ID: </label>
        <input
					type="text"
					name="userId"
					value={formData.userId}
					onChange={handleChange}
					required
				/>
        <label htmlFor="photoURL">Photo: </label>
        <input
					type="text"
					name="photoURL"
					value={formData.photoURL}
					onChange={handleChange}
				/>
        <button>Submit</button>
      </form>
		</div>
	);
}

export default CreatePost;
