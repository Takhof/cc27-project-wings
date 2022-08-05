import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import CreatePost from "../components/CreatePost";
import Newsfeed from "../components/Newsfeed";
import Footer from "../components/Footer";

function SingleProfileView() {
	return (
		<div>
			<h2>Single Profile View </h2>
			<div>
			<Header />
      <Profile />
      <CreatePost />
      <Newsfeed />
			<Footer />
			</div>
		</div>
	);
}

export default Directory;
