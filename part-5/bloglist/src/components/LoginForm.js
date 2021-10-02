import propTypes from "prop-types";
import React, { useState } from "react";
import { login } from "../services/users";

const Login = ({ setUser, setMessage, setShow }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    login({ username, password })
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        setUsername("");
        setPassword("");
      })
      .catch(() => {
        setMessage("wrong credentials");
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <h4>login to application</h4>
      <div>
        username{" "}
        <input
          type="text"
          value={username}
          name="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        password{" "}
        <input
          type="password"
          value={password}
          name="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" id="login-btn">
        login
      </button>
      <button onClick={() => setShow(false)} type="submit">
        cancel
      </button>
    </form>
  );
};

Login.propTypes = {
  setUser: propTypes.func.isRequired,
  setShow: propTypes.func.isRequired,
  setMessage: propTypes.func.isRequired,
};

export default Login;
