import React from "react";
import "../styles.css";
import Moment from "moment";

function Post({ userId, profilePhoto, fullName, text, date }) {
  const formatDate = Moment(date).fromNow();
  return (
    <div>
      <div>
        <div className="profile">
          <a href={"/SingleProfileView?user_id=" + userId}>
            <img className="img1" src={profilePhoto}></img>
          </a>
          <h3 className="fullname">{fullName}</h3>
          <div className="dater">{formatDate}</div>
        </div>

        <div className="about">{text}</div>
      </div>
    </div>
  );
}

export default Post;
