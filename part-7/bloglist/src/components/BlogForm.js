import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postBlog } from "../services/blogs";

const BlogForm = ({ setShowPost }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const post = (e) => {
    e.preventDefault();

    postBlog({ author, title, url })
      .then((data) => {
        dispatch({ type: "ADD", payload: data });
        setAuthor("");
        setTitle("");
        setUrl("");

        setShowPost(false);
        dispatch({ type: "NOTIFY", payload: `new blog "${data.title}" added` });
        setTimeout(() => {
          dispatch({ type: "CLEAR" });
        }, 5000);
      })
      .catch((err) => {
        dispatch({ type: "NOTIFY", payload: err.message });
        setTimeout(() => {
          dispatch({ type: "CLEAR" });
        }, 5000);
      });
  };

  return (
    <form
      onSubmit={post}
      id="form"
      className="my-5 bg-light w-75 shadow rounded border mx-auto p-4 text-center"
    >
      <h4>add new blog</h4>
      <div>
        author :{" "}
        <input
          className="border-2 rounded my-2"
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div>
        title :{" "}
        <input
          className="border-2 rounded my-2"
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        url :{" "}
        <input
          className="border-2 rounded my-2"
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <button className="btn btn-success mx-1" type="submit">
        post
      </button>
      <button
        className="btn btn-danger mx-1"
        onClick={() => setShowPost(false)}
        type="submit"
      >
        cancel
      </button>
    </form>
  );
};

export default BlogForm;
