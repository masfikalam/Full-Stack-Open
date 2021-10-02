import propTypes from "prop-types";
import React from "react";

const ShowToggle = (props) => {
  return props.show ? (
    props.children
  ) : (
    <button onClick={() => props.setShow(true)}>{props.label}</button>
  );
};

ShowToggle.propTypes = {
  label: propTypes.string.isRequired,
};

export default ShowToggle;
