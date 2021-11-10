import React from "react";
import PropTypes from "prop-types";

export const Status = ({ labels, status, ...props }) => {
  return (
    <div className="status" {...props}>
      <div className={`status__indicator status__indicator--${status}`}></div>
      <span className="status__label">{labels[status]}</span>
    </div>
  );
};

Status.propTypes = {
  /**
   * Status to display
   */
  status: PropTypes.oneOf(["success", "warning", "error"]).isRequired,
  /**
   * Costum labels
   */
  labels: PropTypes.shape({
    success: PropTypes.string,
    warning: PropTypes.string,
    error: PropTypes.string,
  }),
};

Status.defaultProps = {
  labels: { success: "success", warning: "warning", error: "error" },
};
