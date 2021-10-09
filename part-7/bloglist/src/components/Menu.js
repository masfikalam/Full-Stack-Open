import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="navbar py-3 bg-light shadow px-3 px-md-5">
      {user.id ? (
        <>
          <div>
            <Link className="fs-5 me-4" to="/">
              blogs
            </Link>
            <Link className="fs-5 me-4" to="/users">
              users
            </Link>
          </div>

          <button className="btn btn-danger" onClick={logout}>
            {user.username}, logout
          </button>
        </>
      ) : (
        <>
          <h4 className="m-0 py-2">Bloglist Application</h4>
          <p className="m-0">developed by Masfik (fullstackopen)</p>
        </>
      )}
    </nav>
  );
};

export default Menu;
