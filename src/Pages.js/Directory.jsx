import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProfileSummary from "../components/ProfileSummary";
import Footer from "../components/Footer";
import useLocalStorage from "use-local-storage";

function Directory() {
  const [profiles, setProfiles] = useState("");

  const getProfilesData = async () => {
    const res = await fetch(`/profiles`, { method: "GET" });
    const data = await res.json();

    setProfiles(data);
    console.log("profiles: ", data);
  };

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    getProfilesData();
  }, []);

  return (
    <div className="App" data-theme={theme}>
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
