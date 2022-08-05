import React from "react";

function ProfileSummary({userId, photoURL, fullName, cohort}) {
	return (
		<div>
      <h3>Profile Summary Component</h3>
      <div>
      <a href={"/SingleProfileView?user_id=" + userId}><img src={photoURL}></img></a>
      <h3>{fullName}</h3>
      <h4>Cohort: CC{cohort}</h4>
      </div>

		</div>
	);
}

export default ProfileSummary;