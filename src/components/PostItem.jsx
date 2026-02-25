import React from "react";

function PostItem({ post }) {
  return (
    <div className="post">
      <h3 className="post-title">{post.title}</h3>
      {post.body && <p>{post.body}</p>}
    </div>
  );
}

export default PostItem;
