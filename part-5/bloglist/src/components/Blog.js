import React, { useState } from "react";
import { likeBlog } from "../services/blogs";

const Blog = ({ blog, remove, uid }) => {
  const [likes, setLikes] = useState(blog.likes);
  const [show, setShow] = useState(false);
  const OpenBtn = () => <button onClick={() => setShow(true)}>view</button>;
  const CloseBtn = () => <button onClick={() => setShow(false)}>close</button>;

  const like = () => {
    const updated = {
      author: blog.author,
      title: blog.title,
      url: blog.url,
      likes: likes + 1,
    };

    likeBlog(blog.id, updated)
      .then((data) => setLikes(data.likes))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="blog">
      <h5>
        {blog.title} ({blog.author}) {show ? <CloseBtn /> : <OpenBtn />}
      </h5>

      {show && (
        <>
          <p>by: {blog.author}</p>
          <p>
            likes: <span id="like">{likes}</span>{" "}
            <button onClick={like}>like</button>
          </p>
          <p>{blog.url}</p>
          {blog.user.id === uid && (
            <button onClick={() => remove(blog)}>remove</button>
          )}
        </>
      )}
    </div>
  );
};

export default Blog;
