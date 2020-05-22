import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div className={s.posts}>
        <Post message="Hi" likesCount="2" />
        <Post message={`First post , sup?`} likesCount="45" />
      </div>
    </div>
  );
};

export default MyPosts;
