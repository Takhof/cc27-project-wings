import React, { useEffect, useState } from "react";
import "../styles.css";

function Profile(userId) {
  const [profile, setProfile] = useState();

  const getProfileData = async () => {
    const res = await fetch(`/profiles/view/${userId.userId}`, {
      method: "GET",
    });
    const data = await res.json();

    setProfile(data);
    console.log("Profile:", profile);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="profile-container">
      <h3 className="profile-header">Profile:</h3>
      {profile && (
        <div>
          <div className="profile-img-container">
            <img
              className="profile-img"
              src={profile.photoURL}
              alt="profile"
            ></img>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">Name:</p>
            <p>{profile.fullName}</p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">Email:</p>
            <p>{profile.email}</p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">About:</p>
            <p>{profile.about}</p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">Linkedin URL:</p>
            <p>{profile.linkedIn}</p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">Twitter Handle:</p>
            <p>{profile.twitter}</p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">CC Cohort:</p>
            <p>{profile.cohort && "CC" + profile.cohort}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
