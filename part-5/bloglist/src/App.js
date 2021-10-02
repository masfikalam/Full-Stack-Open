import React, { useEffect, useState } from "react";
import Blog from "./components/Blog";
import BlogForm from "./components/BlogForm";
import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import ShowToggle from "./components/ShowToggle";
import { getAll, removeBlog } from "./services/blogs";

const App = () => {
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");
  const [showPost, setShowPost] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    getAll().then((blogs) => {
      const arr = [...blogs];
      arr.sort((a, b) => a.likes - b.likes);
      setBlogs(arr.reverse());
    });
  }, []);

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    loggedUser && setUser(JSON.parse(loggedUser));
  }, []);

  const remove = (blog) => {
    const conf = window.confirm(`remove ${blog.title}?`);
    conf &&
      removeBlog(blog.id)
        .then(() => {
          const others = blogs.filter((b) => b.id !== blog.id);
          setBlogs(others);
          setMessage(`deleted ${blog.title}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((err) => console.log(err.message));
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser({});
  };

  return (
    <div>
      {message && <Notification message={message} />}

      {!user.id ? (
        <ShowToggle
          label="login to application"
          show={showLogin}
          setShow={setShowLogin}
        >
          <LoginForm
            setUser={setUser}
            setShow={setShowLogin}
            setMessage={setMessage}
          />
        </ShowToggle>
      ) : (
        <>
          <h4>
            <span>logged in as ({user.username})</span>{" "}
            <button onClick={logout}>logout</button>
          </h4>

          <ShowToggle
            label="post new blog"
            show={showPost}
            setShow={setShowPost}
          >
            <BlogForm
              blogs={blogs}
              token={user.token}
              setBlogs={setBlogs}
              setMessage={setMessage}
              setShowPost={setShowPost}
            />
          </ShowToggle>

          <br />
          <h4>blogs</h4>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} remove={remove} uid={user.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
