import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components/Button/Button";
import { Menu } from "../../components/Menu/Menu";
import { useParams } from "react-router-dom";

export function OnlineGameView({ ...props }) {
  const { gameId } = useParams();
  const history = useHistory();

  return (
    <div
      {...props}
      className="bg-greyscale-offWhite h-full flex flex-col justify-center items-center  w-screen"
    >
      <div className="flex flex-row justify-center gap-4">
        <Menu initiallyOpen={false}>
          <Button
            label="CANCEL GAME"
            variant="secondary"
            onClick={() => history.push("/")}
          />
        </Menu>
      </div>
      <div className="p-4 h-full w-full flex flex-row gap-4 justify-center">
        <h1>GAME! Game id from url: {gameId}</h1>
      </div>
    </div>
  );
}
