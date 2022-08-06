import React, { useState } from "react";
import Post from "./Post"

function Newsfeed() {
	const URL = "http://localhost:3030";
	const [posts, setPosts] = useState("");

  const fetchResponse = async (e) => {
    const res = await fetch(`${URL}/posts`, { method: "GET" });
    const data = await res.json();
    setPosts(data);
  };
	return (
		<div>
      <h3>Newsfeed Component</h3>
			<div>
         <button className="btn" onClick={fetchResponse}>
           Load posts
         </button>
				 {posts && (
						<div>
							{posts.map((post) => {
								return  <Post userId={post.userID} profilePhoto={post.profilePhoto} fullName={post.fullName} text={post.text} date={post.date}/>
							})}
						</div>
					)}
			</div>
		</div>
	);
}

export default Newsfeed;