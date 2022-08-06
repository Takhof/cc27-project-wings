import React from "react";

function Post({userId, profilePhoto, fullName, text, date}) {
	return (
		<div>
      <h3>Post Component</h3>
			<div>
				<div>
					<a href={"/SingleProfileView?user_id=" + userId}><img src={profilePhoto}></img></a>
					{fullName}
					{date}
				</div>
				<div>
					{text}
				</div>
			</div>
		</div>
	);
}

export default Post;