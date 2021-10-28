import React from "react";

export function Modal(props) {
  return (
    <div className="modal" {...props}>
      {props.children}
    </div>
  );
}
