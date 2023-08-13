import React from "react";
import { PostType } from "../types/postType";

const PostCard = ({ id, title, body }: PostType) => {
  return (
    <>
      <div>
        <h1>{id}</h1>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </>
  );
};

export default PostCard;
