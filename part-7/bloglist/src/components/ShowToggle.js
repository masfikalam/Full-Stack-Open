import React from "react";

const ShowToggle = (props) => {
  return props.show ? (
    props.children
  ) : (
    <button
      className="btn btn-info my-5 ms-3"
      onClick={() => props.setShow(true)}
    >
      {props.label}
    </button>
  );
};

export default ShowToggle;
