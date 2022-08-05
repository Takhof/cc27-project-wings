import React from "react";
import Header from "../components/Header";

function Register() {
	return (
		<div>
			<h2>Register</h2>
			<form>
				<label for="email">Email*</label>
				<input type="email" name="email" required />

				<label for="password">Password*</label>
				<input type="password" name="password" required />

				<label for="password">Confirm Password*</label>
				<input type="password" name="password" required />
				<a href="/Login">Have an account? Click here to login</a>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default Register;
