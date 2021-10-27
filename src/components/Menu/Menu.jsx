import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { BsChevronUp } from "react-icons/bs";

export const Menu = ({ initiallyOpen, cancelGame, resetGame }) => {
  const [open, setOpen] = useState(initiallyOpen);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={`menu__outer ${open ? "" : "menu--closed"}`}>
      <Card>
        <div className="menu__inner">
          <nav>
            <Button
              label="CANCEL GAME"
              variant="secondary"
              onClick={cancelGame}
            />
            <Button label="RESET GAME" onClick={resetGame} />
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
   * Whether the Menu starts open or closed
   */
  cancelGame: PropTypes.func.isRequired,
  /**
   * Whether the Menu starts open or closed
   */
  resetGame: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  initiallyOpen: true,
};
