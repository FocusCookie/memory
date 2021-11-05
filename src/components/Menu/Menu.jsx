import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import { BsChevronUp } from "react-icons/bs";

export const Menu = ({ initiallyOpen, ...props }) => {
  const [open, setOpen] = useState(initiallyOpen);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={`menu__outer ${open ? "" : "menu--closed"}`} {...props}>
      <Card>
        <div className="menu__inner">
          <nav>{props.children}</nav>
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
};

Menu.defaultProps = {
  initiallyOpen: true,
};
