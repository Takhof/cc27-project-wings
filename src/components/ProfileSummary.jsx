import React from "react";
import "../styles.css";

function ProfileSummary({ userId, photoURL, fullName, cohort }) {
	return (
		<div>
			{/* <h3>Profile Summary Component</h3> */}
			<div className="Picture">
				<h3>{fullName}</h3>

				<a href={"/SingleProfileView?user_id=" + userId}>
					<img className="img" src={photoURL}></img>
				</a>
				<h4>Cohort: CC{cohort}</h4>
			</div>
		</div>
	);
}

export default ProfileSummary;
