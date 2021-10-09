import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../services/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2>users -</h2>
      <table className="table bg-light shadow text-center">
        <thead>
          <tr>
            <th>name</th>
            <th>blogs created</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.notes.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
