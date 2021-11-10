import { React, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Dropdown = ({ label, elements, onChange, ...props }) => {
  const [value, setValue] = useState(elements?.[0]);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [value]
  );

  return (
    <div className="dropdown" {...props}>
      <label htmlFor={label} className="dropdown__label">
        {label}
      </label>
      <select
        className="dropdown__select"
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
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {};
