import React from "react";
import "../styles.css";

function ProfileSummary({ userId, photoURL, fullName, about, cohort }) {
  const cohortAdj = cohort ? "CC" + cohort : "Teacher";

  return (
    <div>
      <div className="profile-summary-card">
        <a href={"/SingleProfileView?user_id=" + userId}>
          <img className="profile-img" src={photoURL}></img>
        </a>
        <div className="profile-text-container">
          <h3 className="profile-name">{fullName}</h3>
          <p className="profile-about">{about}</p>
        </div>
      </div>
      <h4 className="profile-cohort">{cohortAdj}</h4>
    </div>
  );
}

export default ProfileSummary;
