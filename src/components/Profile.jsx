import React, { useEffect, useState } from "react";
import "../styles.css";

function Profile({userId}) {
  const [profile, setProfile] = useState();

  const getProfileData = async () => {
    const res = await fetch(`/profiles/view/${userId}`, {
      method: "GET",
    });
    const data = await res.json();
    console.log("Profile:", data);

    setProfile(data);
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
            <p className="profile-content-text">{profile.fullName}</p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">Email:</p>
            <p className="profile-content-text">{profile.email}</p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">About:</p>
            <p className="profile-content-text">{profile.about}</p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">Linkedin URL:</p>
            <p className="profile-content-text"><a href={profile.linkedIn}>{profile.linkedIn}</a></p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">Twitter Handle:</p>
            <p className="profile-content-text"><a href={"https://twitter.com/" + profile.twitter}> {profile.twitter} </a></p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">CC Cohort:</p>
            <p className="profile-content-text">
              {profile.cohort && "CC" + profile.cohort}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
