import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

const Post = ({ username, caption, imageUrl, avatarUrl }) => {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar className="post_avatar" src={avatarUrl} alt="JohnCena" />
        <h3>{username}</h3>
      </div>
      <img className="post_image" src={imageUrl} alt="" />
      <h4 className="post_text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
};

export default Post;
