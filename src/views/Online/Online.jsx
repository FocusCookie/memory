import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components/Button/Button";
import { Menu } from "../../components/Menu/Menu";
import { OnlinePlayers } from "../../components/OnlinePlayers/OnlinePlayers";
import { TableGames } from "../../components/TableGames/TableGames";

export function Online({ ...props }) {
  const history = useHistory();

  return (
    <div
      {...props}
      className="bg-greyscale-offWhite h-full flex flex-col justify-center items-center  w-screen"
    >
      <div className="flex flex-row justify-center gap-4">
        <Menu initiallyOpen={false}>
          <Button
            label="HOME"
            variant="secondary"
            onClick={() => history.push("/")}
          />
        </Menu>
      </div>
      <div className="p-4 h-full w-full flex flex-row gap-4 justify-center">
        <div>
          <OnlinePlayers />
        </div>
        <div className="flex flex-col items-end gap-4 w-full">
          <div className="self-stretch">
            <TableGames />
          </div>

          <div>
            <Button
              label="Create game"
              variant="primary"
              onClick={() => history.push("/online/games/create")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
