import React, { useEffect, useState } from "react";

function Profile(userId) {
	const [profile, setProfile] = useState();

	const getProfileData = async () => {
		const res = await fetch(`/profiles/view/${userId.userId}`, { method: "GET" });
		const data = await res.json();

		setProfile(data);
		console.log("Profile:", profile)
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
					<p>Name: <span>{profile.fullName}</span></p>
					<p>Email: <span>{profile.email}</span></p>
					<p>About: <span>{profile.about}</span></p>
					<p>Linkedin URL: <span>{profile.linkedIn}</span></p>
					<p>Twitter Handle: <span>{profile.twitter}</span></p>
					<p>CC Cohort: <span>{profile.cohort && "CC" + profile.cohort}</span></p>
				</div>
			)}
		</div>
	);
}

export default Profile;