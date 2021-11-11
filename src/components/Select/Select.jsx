import React, { useState } from "react";
import PropTypes from "prop-types";

export const Select = ({ labels, onChange, init, disabled, ...props }) => {
  const [checked, setChecked] = useState(init);

  const handleChange = (value) => {
    if (!disabled) {
      setChecked(value);
      onChange(value);
    }
  };

  return (
    <div className="select" {...props}>
      <label
        className={`select__control ${
          disabled ? "select__control--disabled" : ""
        }`}
      >
        <input
          type="radio"
          name="radio"
          onChange={() => handleChange(false)}
          checked={!checked}
        />
        <span>{labels.off}</span>
      </label>
      <label
        className={`select__control ${
          disabled ? "select__control--disabled" : ""
        }`}
      >
        <span>{labels.on}</span>
        <input
          type="radio"
          name="radio"
          onChange={() => handleChange(true)}
          checked={checked}
        />
      </label>
    </div>
  );
};

Select.propTypes = {
  /**
   * Custom labels
   */
  labels: PropTypes.shape({
    on: PropTypes.string,
    off: PropTypes.string,
  }),
  /**
   * Eventhandler which fires when the state is changed
   */
  onChange: PropTypes.func,
  /**
   * init value
   */
  init: PropTypes.bool,
  /**
   * Disable the radio button,
   */
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  init: false,
  labels: { on: "on", off: "off" },
  disabled: false,
};
