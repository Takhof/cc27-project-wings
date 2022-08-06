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
    <div>
      <h3>Profile</h3>
      {profile && (
        <div>
          <img src={profile.photoURL} alt="profile"></img>
          <p>Name: {profile.fullName}</p>
          <p>Email: {profile.email}</p>
          <p>About: {profile.about}</p>
          <p>Linkedin URL: {profile.linkedIn}</p>
          <p>Twitter Handle: {profile.twitter}</p>
          <p>CC Cohort: {profile.cohort && "CC" + profile.cohort}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
