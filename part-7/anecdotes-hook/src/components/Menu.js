import { Link } from "react-router-dom";

const Menu = ({ user }) => {
  const styles = { paddingRight: 20 };

  return (
    <nav>
      <Link to="/" style={styles}>
        anecdotes
      </Link>
      <Link to="/create" style={styles}>
        create new
      </Link>
      <Link to="/about" style={styles}>
        about
      </Link>
      <Link to="/users" style={styles}>
        users
      </Link>
      {!user ? (
        <Link to="/login" style={styles}>
          login
        </Link>
      ) : (
        <span>{user}</span>
      )}
    </nav>
  );
};

export default Menu;
