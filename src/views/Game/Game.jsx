import React from "react";
import { useHistory } from "react-router";
import { Menu } from "../../components/Menu/Menu";
import { Gameboard } from "../../components/Gameboard/Gameboard";
import { getMockData } from "../../services/api.services";

const data = getMockData().slice(0, 6);

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
        <Gameboard cards={data} />
      </div>
    </div>
  );
}
