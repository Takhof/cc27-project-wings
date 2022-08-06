import React from "react";

function Profile(userId) {

	return (
		<div>
      <h3>Profile Component</h3>
			Profile for userID: {userId.userId}
		</div>
	);
}

export default Profile;