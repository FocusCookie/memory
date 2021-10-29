import React from "react";

export function Card(props) {
  return (
    <div className="card" {...props}>
      {props.children}
    </div>
  );
}
