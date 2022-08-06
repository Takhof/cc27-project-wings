import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import CreatePost from "../components/CreatePost";
import Newsfeed from "../components/Newsfeed";
import Footer from "../components/Footer";

function SingleProfileView() {
  // Get userId from querystring
  const queryParams = new URLSearchParams(window.location.search);
  let userId = queryParams.get('user_id');

	return (
		<div>
			<div>
			<Header />
			<h2>Single Profile View </h2>
      <Profile userId={userId}/>
      <CreatePost />
      <Newsfeed />
			<Footer />
			</div>
		</div>
	);
}

export default SingleProfileView;
