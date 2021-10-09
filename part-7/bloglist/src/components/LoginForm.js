import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../services/users";

const Login = ({ setShow }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();

    login({ username, password })
      .then((data) => {
        dispatch({ type: "LOGIN", payload: data });
      })
      .catch(() => {
        setUsername("");
        setPassword("");
        dispatch({ type: "NOTIFY", payload: "wrong credentials" });
        setTimeout(() => {
          dispatch({ type: "CLEAR" });
        }, 3000);
      });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="shadow bg-light rounded p-4 mx-auto mt-5 w-75 w-md-50"
    >
      <h4 className="text-center fw-bold text-info mb-4">
        login to application
      </h4>

      <div className="text-center my-2">
        username :{" "}
        <input
          className="rounded border-1"
          required
          type="text"
          value={username}
          name="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="text-center my-2">
        password :{" "}
        <input
          className="rounded border-1"
          required
          type="password"
          value={password}
          name="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-success mx-1" type="submit" id="login-btn">
          login
        </button>
        <button
          onClick={() => setShow(false)}
          className="btn btn-danger mx-1"
          type="submit"
        >
          cancel
        </button>
      </div>
    </form>
  );
};

export default Login;
