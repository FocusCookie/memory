import { React, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Dropdown = ({ label, options, onClick, ...props }) => {
  const [value, setValue] = useState(options?.[0]);

  useEffect(() => {
    onClick(value);
  }, [value]);

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [value]
  );

  return (
    <div className="dropdown">
      <label htmlFor={label} className="dropdown-label">
        {label}
      </label>
      <select
        className="dropdown-select"
        name={label}
        id={label + "-select"}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  /**
   * Label
   */
  label: PropTypes.string,
  /**
   * Options
   */
  options: PropTypes.arrayOf(PropTypes.string),
  /**
   * Callback Function that receives the currently selected option as a string
   */
  onClick: PropTypes.func,
};

Dropdown.defaultProps = {};
