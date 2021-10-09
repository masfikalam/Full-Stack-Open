import React from "react";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <p className="text-center mx-auto my-5 text-white lead">
      <span className="bg-danger p-3 rounded">{message}</span>
    </p>
  );
};

export default Notification;
