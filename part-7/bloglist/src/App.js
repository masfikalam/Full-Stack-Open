import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Blog from "./components/Blog";
import BlogForm from "./components/BlogForm";
import LoginForm from "./components/LoginForm";
import Menu from "./components/Menu";
import Notification from "./components/Notification";
import ShowToggle from "./components/ShowToggle";
import User from "./components/User";
import Users from "./components/Users";
import { getAll } from "./services/blogs";

const App = () => {
  const dispatch = useDispatch();
  const [showPost, setShowPost] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { blogs, user, message } = useSelector((state) => state);

  useEffect(() => {
    getAll().then((blogs) => {
      const arr = [...blogs];
      arr.sort((a, b) => a.likes - b.likes);
      dispatch({ type: "ADD_ALL", payload: arr.reverse() });
    });
  }, [dispatch]);

  useEffect(() => {
    const logged = localStorage.getItem("user");
    logged && dispatch({ type: "LOGIN", payload: JSON.parse(logged) });
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Menu />
        {message && <Notification message={message} />}

        <Switch>
          <Route path="/login">
            {user.id ? (
              <Redirect to="/" />
            ) : (
              <ShowToggle
                label="login to application"
                show={showLogin}
                setShow={setShowLogin}
              >
                <LoginForm setShow={setShowLogin} />
              </ShowToggle>
            )}
          </Route>

          <Route path="/users/:id">
            <User />
          </Route>

          <Route path="/users">
            {user.id ? <Users /> : <Redirect to="/login" />}
          </Route>

          <Route path="/blogs/:id">
            <Blog />
          </Route>

          <Route path="/">
            {user.id ? (
              <div className="container">
                <ShowToggle
                  label="post new blog"
                  show={showPost}
                  setShow={setShowPost}
                >
                  <BlogForm setShowPost={setShowPost} />
                </ShowToggle>

                <h2 className="my-3">blogs -</h2>
                {blogs.map((blog) => (
                  <Link key={blog.id} to={`/blogs/${blog.id}`}>
                    <p className="text-white border bg-primary rounded-pill px-4 py-3">
                      {blog.title}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
