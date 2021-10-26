import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
  return <div className="card">{props.children}</div>;
}
