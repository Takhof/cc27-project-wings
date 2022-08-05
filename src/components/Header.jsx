import React from "react";

function Header(props) {
	// console.log("♥️props: ", props.loggedInUser[0].email);
	return (
		<header>
			<h1>Wings 🦋</h1>
			<h2>Connecting CC students and alumni</h2>
			<div>Logged in: {props ? props.loggedInUser : ""}</div>
		</header>
	);
}

export default Header;

//  missing css and link to directory
