import React, { useEffect, useState } from "react";
import { getPosts } from "../services/api";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch(() => setError("Не удалось загрузить посты"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Posts</h1>

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: 20 }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
