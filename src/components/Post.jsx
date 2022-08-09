import React, { useRef, useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import Moment from "moment";

function Post({ postId, userId, profilePhoto, fullName, text, date }) {
  const [isEditable, setIsEditable] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  const formatDate = Moment(date).fromNow();

  const navString = "/SingleProfileView?user_id=" + userId;

  const handleLink = (e) => {
    navigate(navString);
  };

  /**
   * Show the update button when edit button is clicked
   */
  const editText = () => {
    setIsEditable(!isEditable);
    ref.current.classList.toggle("editable");
  };

  /**
   * Update the post
   */
  const updatePost = async () => {
    const postText = ref.current.textContent;

    try {
      const response = await axios.put(`/posts/${postId}`, {
        userId,
        postText,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Something get wrong");
      return;
    }
    window.location.reload();
  };

  return (
    <div className="post-container">
      <div className="post-flex-container">
        <div className="post-img-container">
          <a onClick={handleLink}>
            <img className="post-img" src={profilePhoto}></img>
          </a>
        </div>
        <div className="post-text-container">
          <h3 className="post-name">{fullName}</h3>
          <div
            className="post-text"
            contentEditable={isEditable}
            ref={ref}
            suppressContentEditableWarning={true}
          >
            {text}
          </div>
        </div>
      </div>
      <p className="post-timestamp">{formatDate}</p>
      <button className="edit" onClick={(e) => editText(e)}>
        Edit
      </button>
      {isEditable ? (
        <Popup
          trigger={
            <button className="update" onClick={() => updatePost()}>
              Update
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal-container">
              <button className="modal-close" onClick={close}>
                &times;
              </button>
              <div className="modal-header">Are you sure?</div>
              <div className="modal-content">
                Are you ok to update? This action will not be recovered.
              </div>
              <div className="modal-actions">
                <button
                  className="modal-button-error"
                  onClick={() => {
                    updatePost();
                  }}
                >
                  Update
                </button>
                <button
                  className="modal-button-success"
                  onClick={() => {
                    close();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </Popup>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Post;
