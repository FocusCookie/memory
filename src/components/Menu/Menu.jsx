import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { BsChevronUp } from "react-icons/bs";

export const Menu = ({ initiallyOpen, onCancel, onReset, ...props }) => {
  const [open, setOpen] = useState(initiallyOpen);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={`menu__outer ${open ? "" : "menu--closed"}`} {...props}>
      <Card>
        <div className="menu__inner">
          <nav>
            <Button
              label="CANCEL GAME"
              variant="secondary"
              onClick={onCancel}
            />
            <Button label="RESET GAME" onClick={onReset} />
          </nav>
          <BsChevronUp className="menu__chevron" onClick={toggleMenu} />
        </div>
      </Card>
    </div>
  );
};

Menu.propTypes = {
  /**
   * Whether the Menu starts open or closed
   */
  initiallyOpen: PropTypes.bool,
  /**
   * Eventhandler for the "CANCEL GAME" Button
   */
  onCancel: PropTypes.func.isRequired,
  /**
   * Eventhandler for the "RESET GAME" Button
   */
  onReset: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  initiallyOpen: true,
};
