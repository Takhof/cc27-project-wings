import React from "react";
import Header from "../components/Header";
import { useState } from "react";

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

		const res = await fetch(`${URL}/users/login`, options);
		const data = await res.json();
		// TODO Redirect user to profile creation page
		console.log("Data from Server", data);
	};
	return (
		<div>
			<h2>Register</h2>

			<form onSubmit={handleSubmit}>
				<label for="email">Email*</label>
				<input
					type="email"
					name="email"
					value={formData.email || ""}
					onChange={handleChange}
					required
				/>
				<label for="password">Password*</label>
				<input
					type="password"
					name="password"
					value={formData.password || ""}
					onChange={handleChange}
					required
				/>
				<label for="password">Password*</label>
				<input
					type="password"
					name="password"
					value={formData.password || ""}
					onChange={handleChange}
					required
				/>{" "}
				Login
				<a href="/Login">Have an account? Click here to login</a>
				<button>Submit</button>
			</form>
		</div>
	);
}
export default Register;

// {
/* export default Register;
<label for="email">Email*</label>
				<input type="email" name="email" required />

				<label for="password">Password*</label>
				<input type="password" name="password" required />

				<label for="password">Confirm Password*</label>
				<input type="password" name="password" required /> */
// }
