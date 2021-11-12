import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components/Button/Button";
import { Menu } from "../../components/Menu/Menu";
import { CreateGame } from "../../components/CreateGame/CreateGame";

export function OnlineCreateGame({ ...props }) {
  const history = useHistory();

  return (
    <div
      {...props}
      className="bg-greyscale-offWhite h-full flex flex-col justify-center items-center  w-screen"
    >
      <div className="flex flex-row justify-center gap-4">
        <Menu initiallyOpen={false}>
          <Button
            label="CANCEL CREATION"
            variant="secondary"
            onClick={() => history.push("/")}
          />
        </Menu>
      </div>
      <div className="p-4 h-full flex flex-col gap-4 items-center">
        <h1>Create game</h1>
        <CreateGame />
      </div>
    </div>
  );
}
