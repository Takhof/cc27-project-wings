import React from "react";
import { useState } from "react";

function Login() {
	const [formData, setFormData] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setFormData((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert();
	};

	return (
		<div>
			<h2>Login</h2>
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
				<input type="submit" />
				Login
			</form>
		</div>
	);
}

export default Login;
