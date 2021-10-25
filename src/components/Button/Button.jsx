import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "../Spinner/Spinner";

export const Button = ({ label, variant, loading, ...props }) => {
  return (
    <button className={`btn btn--${variant}`} {...props}>
      {loading ? (
        <Spinner
          color={variant === "primary" ? "#FFFFFF" : "var(--color--primary)"}
          size="1.5rem"
        />
      ) : (
        label
      )}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional button variant, defaults to primary
   */
  variant: PropTypes.string,
  /**
   * Optional, determines whether to render the label or a loading spinner, defaults to false
   */
  loading: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional status, defaults to false
   */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  loading: false,
  disabled: false,
};
