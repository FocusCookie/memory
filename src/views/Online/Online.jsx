import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components/Button/Button";
import { Menu } from "../../components/Menu/Menu";

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
            label="CANCEL GAME"
            variant="secondary"
            onClick={() => history.push("/")}
          />
        </Menu>
      </div>
      <div className="p-4 h-full w-full flex flex-row gap-4 justify-center">
        <div>
          <h1>Online Players</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1>Lobbies</h1>
            <Button
              label="JOIN GAME"
              variant="secondary"
              onClick={() => history.push("/online/games/1234")}
            />
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
