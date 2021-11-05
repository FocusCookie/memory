import React from "react";

export function Modal(props) {
  return (
    <div className="modal" {...props}>
      <div className="modal__content">{props.children}</div>
    </div>
  );
}
