import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
		const res = await fetch(`${URL}/users/save`, options);
		const data = await res.json();
		console.log("Data from Server", data);
		// TODO Redirect user to profile creation page

	};
	return (
		<div>
			<Header />
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
			<Footer />
		</div>
	);
}
export default Register;

