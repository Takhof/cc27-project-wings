import React, { useEffect, useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

function Profile({ userId }) {
  const [profile, setProfile] = useState();
  const navigate = useNavigate();

  const handleLink = (e) => {
    navigate("/Directory");
  };

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
      <a className="directory-link" onClick={handleLink}>
        Directory
      </a>
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
            <p className="profile-content-text">{profile.linkedIn}</p>
          </div>
          <div className="profile-content">
            <p className="profile-content-title">Twitter Handle:</p>
            <p className="profile-content-text">{profile.twitter}</p>
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
