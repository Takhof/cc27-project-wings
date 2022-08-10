import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function Newsfeed() {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [posts]); // TODO [posts] is too many requests

  return (
    <div className="newsfeed-container">
      <h3 className="newsfeed-header">Newsfeed:</h3>
      <div>
        {posts && (
          <div>
            {posts.map((post) => {
              return (
                <Post
                  key={post.postID}
                  postId={post.postID}
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
