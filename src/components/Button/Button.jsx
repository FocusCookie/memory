import React from "react";
import PropTypes from "prop-types";

export const Button = ({ label, onClick, ...props }) => {
  return (
    <button className="btn" {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "button",
  onClick: undefined,
};
