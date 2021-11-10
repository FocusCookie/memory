import { React, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Dropdown = ({ label, elements, onClick, ...props }) => {
  const [value, setValue] = useState(elements?.[0]);

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
        {elements.map((element) => (
          <option key={element} value={element}>
            {element}
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
   * elements
   */
  elements: PropTypes.arrayOf(PropTypes.string),
  /**
   * Callback Function that receives the currently selected option as a string
   */
  onClick: PropTypes.func,
};

Dropdown.defaultProps = {};
