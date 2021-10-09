import { useHistory } from "react-router";

const Login = ({ login }) => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    login("masfik");
    history.push("/");
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input />
        </div>
        <div>
          password: <input type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
