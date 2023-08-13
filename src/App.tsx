import React, { useEffect } from "react";
import { PostType } from "./types/postType";
import PostCard from "./components/PostCard";

const App = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <div>
        {data.map((post: PostType) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </>
  );
};

export default App;
