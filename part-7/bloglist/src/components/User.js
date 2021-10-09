import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOne } from "../services/users";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getOne(id)
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!user.blogs) return null;

  return (
    <div className="container mt-5">
      <h3 className="text-decoration-underline mb-4">{user.name}</h3>

      <h4 className="mt-5 mb-3">added blogs -</h4>
      <ul className="list-unstyled">
        {user.blogs.map((blog) => (
          <li
            className="border rounded-pill bg-light my-2 px-4 py-2"
            key={blog.id}
          >
            {blog.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
