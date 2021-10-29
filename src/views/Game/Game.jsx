import React from "react";
import { useHistory } from "react-router";
import { Menu } from "../../components/Menu/Menu";

export function Game({ ...props }) {
  const history = useHistory();

  return (
    <div
      {...props}
      className="flex flex-col justify-center items-center h-screen w-screen"
    >
      <div className="absolute top-0 w-full">
        <Menu
          onCancel={() => history.push("/")}
          onReset={() => console.log("reset")}
          initiallyOpen={false}
        />
      </div>
      <div>
        <h1>THIS IS THE GAMEVIEW</h1>
      </div>
    </div>
  );
}
