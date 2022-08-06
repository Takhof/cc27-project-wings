import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import CreatePost from "../components/CreatePost";
import Newsfeed from "../components/Newsfeed";
import Footer from "../components/Footer";
// import { useLocation } from "react-router-dom";

function SingleProfileView() {
  // for catching data passed in via navigate, if applicable
  // const location = useLocation();
  // console.log("ID FROM LOGIN PAGE", location.state.id);

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
        <h2>Single Profile View </h2>
        <Profile userId={userId} />
        <CreatePost />
        <Newsfeed />
        <Footer />
      </div>
    </div>
  );
}

export default SingleProfileView;
