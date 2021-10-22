import React from 'react'
import PropTypes from "prop-types";

export function Card({ label, darkmode }) {
    return (
        <div className={`Card ${darkmode ? "Card--dark" : ""}`}>
            I m a {label}
        </div>
    );
}

Card.propTypes = {
  /**
   * Card contents
   */
    label: PropTypes.string.isRequired,
  /**
   * Toggle Dark Mode on
   */
    darkmode: PropTypes.bool,
};

Card.defaultProps = {
    label: "card",
    darkmode: false,
    
};
