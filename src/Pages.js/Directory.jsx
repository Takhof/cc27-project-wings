import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Footer from "src/components/Footer";

function Directory() {
	return (
		<div>
			<Header />
			<h2>Directory </h2>
			<div>
				<p> this is where other people's profiles go </p>
			</div>

			<a href="/CreateProfile">Go back to create profile</a>
			<br />
			<a href="/Login">Need to sign in, Click here</a>
			<form></form>
			<Footer />
		</div>
	);
}

export default Directory;
