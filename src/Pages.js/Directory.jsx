import React, { useState } from "react";
import Header from "../components/Header";
import ProfileSummary from "../components/ProfileSummary";
import Footer from "../components/Footer";

function Directory() {
	const URL = "http://localhost:3030";
	const [profiles, setProfiles] = useState("");

	// TESTING DATA FROM BACKEND
	const fetchResponse = async (e) => {
		const res = await fetch(`${URL}/profiles`, { method: "GET" });
		const data = await res.json();
		setProfiles(data);
		// TESTING
		console.log("profiles: ", profiles);
	};

	return (
		<div>
			<Header />
			<h2 className="Directory">Directory </h2>
			<div>
				<button className="btn" onClick={fetchResponse}>
					Load profile directory
				</button>
				{profiles && (
					<div className="test-container">
						{profiles.map((profile) => {
							return (
								<ProfileSummary
									userId={profile.userId}
									photoURL={profile.photoURL}
									fullName={profile.fullName}
									cohort={profile.cohort}
								/>
							);
						})}
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}

export default Directory;
