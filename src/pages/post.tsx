import React from "react";
import { PostType } from "../types/postType";
import PostCard from "../components/PostCard";

const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  return data.json();
};

const PostList = async () => {
  const data: PostType[] = await getData();
  return (
    <>
      <div>
        {data.map((post) => (
          <PostCard
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
