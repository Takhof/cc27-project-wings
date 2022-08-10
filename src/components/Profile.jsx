import React, { useEffect, useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState();
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const navigate = useNavigate();

  const handleLink = (e) => {
    navigate("/Directory");
  };

  let logout = async () => {
    try {
      await axios.get("/users/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const payloadResponse = await axios.get("/cookie/payload");
        const { userId } = payloadResponse.data;
        setLoggedInUserId(userId);

        const response = await axios.get(`/profiles/view/${userId}`);
        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="profile-container">
      <h3 className="profile-header">Profile:</h3>
      <a className="directory-link" onClick={handleLink}>
        Directory
      </a>
      <a className="Log_out" onClick={logout}>
        Logout
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
