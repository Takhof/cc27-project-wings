import React from "react";
import "../styles.css";

function ProfileSummary({ userId, photoURL, fullName, cohort }) {
  if (!cohort) cohort = "";
  if (cohort) cohort = "CC" + cohort;

  return (
    <div>
      <div className="profile-summary-card">
        <a href={"/SingleProfileView?user_id=" + userId}>
          <img className="profile-img" src={photoURL}></img>
        </a>
        <div className="profile-text-container">
          <h3 className="profile-name">{fullName}</h3>
          <h4 className="profile-cohort">{cohort || ""}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProfileSummary;
