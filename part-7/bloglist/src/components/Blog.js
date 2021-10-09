import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { commentBlog, getOne, likeBlog, removeBlog } from "../services/blogs";

const Blog = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [blog, setBlog] = useState({});
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getOne(id)
      .then((data) => setBlog(data))
      .catch((err) => console.log(err));
  }, [id]);

  const like = () => {
    const updated = { ...blog, likes: blog.likes + 1 };
    delete updated.user;

    likeBlog(blog.id, updated)
      .then((data) => {
        setBlog(data);
      })
      .catch((err) => console.log(err.message));
  };

  const comment = (e) => {
    e.preventDefault();
    const obj = { comment: e.target.comment.value };

    commentBlog(blog.id, obj).then((data) => {
      setBlog(data);
      e.target.reset();
    });
  };

  const remove = (blog) => {
    const conf = window.confirm(`remove ${blog.title}?`);
    conf &&
      removeBlog(blog.id)
        .then(() => {
          dispatch({ type: "DELETE", payload: blog.id });
          dispatch({ type: "NOTIFY", payload: `deleted ${blog.title}` });
          setTimeout(() => {
            dispatch({ type: "CLEAR" });
          }, 5000);
          history.push("/");
        })
        .catch((err) => console.log(err.message));
  };

  if (!blog.user) return null;

  return (
    <article className="container my-5">
      <h3 className="text-decoration-underline">
        {blog.title}
        <button className="btn btn-info px-3 ms-4 btn-sm" onClick={like}>
          {blog.likes} likes
        </button>
        {(blog.user.id || blog.user) === user.id && (
          <button
            className="btn btn-danger btn-sm px-3 ms-2"
            onClick={() => remove(blog)}
          >
            remove
          </button>
        )}
      </h3>

      <p className="fs-5">
        url: <a href={blog.url}>{blog.url}</a> <br />
        added by: <b>{blog.author}</b>
      </p>

      <h4 className="mt-4">comments -</h4>
      <form onSubmit={comment}>
        <input className="rounded border-2 me-2" type="text" name="comment" />
        <button className="btn btn-sm btn-dark" type="submit">
          comment
        </button>
      </form>
      <ul className="list-unstyled">
        {blog.comments.map((c, i) => (
          <li className="border rounded-pill bg-light my-2 px-4 py-2" key={i}>
            {c}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Blog;
