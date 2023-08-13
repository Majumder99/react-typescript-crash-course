import React from "react";
import PostCard from "./PostCard";
import { PostType } from "../types/postType";

const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  return data.json();
};

const PostList = async () => {
  const data: PostType[] = await getData();
  console.log(`data`, data);
  return (
    <>
      {data.map((post) => (
        <>
          <PostCard
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        </>
      ))}
    </>
  );
};

export default PostList;
