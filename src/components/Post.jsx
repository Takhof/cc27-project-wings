import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import Moment from "moment";

function Post({ userId, profilePhoto, fullName, text, date }) {
  const navigate = useNavigate();

  const formatDate = Moment(date).fromNow();

  const navString = "/SingleProfileView?user_id=" + userId;

  const handleLink = (e) => {
    navigate(navString);
  };

  return (
    <div className="post-container">
      <div className="post-flex-container">
        <div className="post-img-container">
          <a onClick={handleLink}>
            <img className="post-img" src={profilePhoto}></img>
          </a>
        </div>
        <div className="post-text-container">
          <h3 className="post-name">{fullName}</h3>
          <div className="post-text">{text}</div>
        </div>
      </div>
      <p className="post-timestamp">{formatDate}</p>
    </div>
  );
}

export default Post;
