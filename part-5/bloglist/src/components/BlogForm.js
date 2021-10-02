import React, { useState } from "react";
import { postBlog } from "../services/blogs";

const BlogForm = ({ blogs, setBlogs, setMessage, setShowPost }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const post = (e) => {
    e.preventDefault();

    postBlog({ author, title, url })
      .then((data) => {
        setBlogs([...blogs, data]);
        setAuthor("");
        setTitle("");
        setUrl("");

        setShowPost(false);
        setMessage(`new blog "${data.title}" added`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch((err) => {
        setMessage(err.message);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
  };

  return (
    <form onSubmit={post} id="form">
      <div>
        author{" "}
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        title{" "}
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        url{" "}
        <input
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button type="submit">post</button>
      <button onClick={() => setShowPost(false)} type="submit">
        cancel
      </button>
    </form>
  );
};

export default BlogForm;
