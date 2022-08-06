import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import CreatePost from "../components/CreatePost";
import Newsfeed from "../components/Newsfeed";
import Footer from "../components/Footer";

function SingleProfileView() {
  // access local storage, set in Login
  const loggedInUserId = localStorage.getItem("id");
  console.log("USER ID FROM LOCAL STORAGE: ", loggedInUserId);

  // Get userId from querystring
  const queryParams = new URLSearchParams(window.location.search);
  let userId = queryParams.get("user_id") || loggedInUserId;

  console.log("Showing profile data for UserID: ", userId);

  return (
    <div>
      <div>
        <Header />
        <div className="spv-container">
          <Profile userId={userId} />
          <div className="posts-main-container">
            <CreatePost />
            <Newsfeed />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SingleProfileView;
