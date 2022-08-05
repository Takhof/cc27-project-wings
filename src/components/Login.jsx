import React from "react";
import { useState } from "react";

const URL = "http://localhost:3030";

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

		const res = await fetch(`${URL}/users/login`, options);
		const data = await res.json();
		// TODO Redirect user to profile creation page
		console.log("Data from Server", data);
	};

	return (
		<div>
			<h2>Login</h2>

			<br />
			<a href="/CreateProfile">Create Profile/Edit</a>
			<br />
			<a href="/Directory">Directory</a>
			<a href="/Contact">Contact</a>

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
				/>{" "}
				Login
				<input type="submit" />
				<br />
				<a href="/Register">Dont have an Account, Sign up here</a>
				<br />
				<a href="/CreateProfile">Create Profile/Edit</a>
				<br />
				<a href="/Directory">Directory</a>
				<br />
				<a href="/Contact">Contact us</a>
			</form>
		</div>
	);
}

export default Login;
