import React, { useEffect, useState } from "react";
import Post from "./Post";

function Newsfeed() {
  const [posts, setPosts] = useState("");

  const fetchResponse = async (e) => {
    const res = await fetch("/posts", { method: "GET" });
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchResponse();
  }, [posts]);

  return (
    <div className="newsfeed-container">
      <h3 className="newsfeed-header">Newsfeed:</h3>
      <div>
        {posts && (
          <div>
            {posts.map((post) => {
              return (
                <Post
                  userId={post.userID}
                  profilePhoto={post.profilePhoto}
                  fullName={post.fullName}
                  text={post.text}
                  date={post.date}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Newsfeed;
