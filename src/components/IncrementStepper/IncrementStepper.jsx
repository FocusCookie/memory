import { React, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

export const IncrementStepper = ({
  min,
  max,
  initialValue,
  label,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  const onIncrease = useCallback(() => {
    setValue(Math.min(value + 1, max));
  }, [value]);

  const onDecrease = useCallback(() => {
    setValue(Math.max(value - 1, min));
  }, [value]);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <div className="incrementStepper" {...props}>
      <div className="incrementStepper__label">{label}</div>
      <div className="incrementStepper__controls">
        <button className="incrementStepper__control" onClick={onDecrease}>
          <HiMinusSm />
        </button>
        <div className="incrementStepper__value">{value}</div>
        <button className="incrementStepper__control" onClick={onIncrease}>
          <HiPlusSm />
        </button>
      </div>
    </div>
  );
};

IncrementStepper.propTypes = {
  /**
   * lower limit
   */
  min: PropTypes.number,
  /**
   * Upper limit
   */
  max: PropTypes.number,
  /**
   * Initial value
   */
  initialValue: PropTypes.number,
  /**
   * Lower value bound
   */
  label: PropTypes.string,
  /**
   * Lower value bound
   */
  onChange: PropTypes.func,
};

IncrementStepper.defaultProps = {
  min: 0,
  max: 100,
  initialValue: 0,
};
