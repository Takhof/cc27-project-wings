import React from "react";
import Header from "../components/Header";
// import Footer from "src/components/Footer";

function CreateProfile() {
	return (
		<div>
			<h2>Create/Edit </h2>
			<form>
				<input type="file" id="myFile" name="filename" />
				<br />
				<br />
				<label for="fname">Full Name*: </label>
				<input type="text" name="fname" />
				<br />
				<br />
				<label for="about">About: </label>
				<input type="text" name="about" />
				<br />
				<br />
				<label for="LinkedIn">LinkedIn: </label>
				<input type="text" name="LinkedIn" />
				<br />
				<br />
				<label for="twitter">Twitter: </label>
				<input type="text" name="Twitter" />
				<br />
				<br />
				<label for="CC_Cohort">CC_Cohort: </label>
				<input type="text" name="CC_Cohort" />
				<br />
				<br />
				<a href="/Login">Have an account? Click here to login</a>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default CreateProfile;
