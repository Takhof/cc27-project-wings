import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProfileSummary from "../components/ProfileSummary";
import Footer from "../components/Footer";

function Directory() {
  const [profiles, setProfiles] = useState("");

  const getProfilesData = async () => {
    const res = await fetch(`/profiles`, { method: "GET" });
    const data = await res.json();

    setProfiles(data);
    console.log("profiles: ", data);
  };

  useEffect(() => {
    getProfilesData();
  }, []);

  return (
    <div>
      <Header />
      <h2 className="directory-header">Welcome to the Club:</h2>
      <div>
        {profiles && (
          <div className="directory-container">
            {profiles.map((profile) => {
              return (
                <ProfileSummary
                  userId={profile.userId}
                  photoURL={profile.photoURL}
                  fullName={profile.fullName}
                  about={profile.about}
                  cohort={profile.cohort}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Directory;
