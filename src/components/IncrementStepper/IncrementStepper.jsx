import { React, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

export const IncrementStepper = ({
  min,
  max,
  initialValue,
  label,
  onClick,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);
  console.log("rerendering component");
  console.log("current value is: ", value);

  const onIncrease = useCallback(() => {
    setValue(Math.min(value + 1, max));
  }, [value]);

  const onDecrease = useCallback(() => {
    setValue(Math.max(value - 1, min));
  }, [value]);

  useEffect(() => {
    onClick(value);
  }, [value]);

  return (
    <div className="incrementStepper" {...props}>
      <div className="incrementStepper-label">{label}</div>
      <div className="incrementStepper-controls">
        <button className="incrementstepper-control" onClick={onDecrease}>
          <HiMinusSm />
        </button>
        <div className="incrementstepper-value">{value}</div>
        <button className="incrementstepper-control" onClick={onIncrease}>
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
  onClick: PropTypes.func,
};

IncrementStepper.defaultProps = {
  min: 0,
  max: 100,
  initialValue: 0,
};
