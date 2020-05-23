import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postBlock}>
     <h3> My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi" likesCount="2" />
        <Post message={`First post , sup?`} likesCount="45" />
      </div>
    </div>
  );
};

export default MyPosts;
