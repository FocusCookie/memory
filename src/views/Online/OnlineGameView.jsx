import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button } from "../../components/Button/Button";
import { Menu } from "../../components/Menu/Menu";
import { Select } from "../../components/Select/Select";
import { Spinner } from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import { useGame } from "../../hooks/useGame";

export function OnlineGameView({ ...props }) {
  const { gameId } = useParams();
  const { status: gameStatus, data: gameData } = useGame(gameId);
  const [loadGame, setLoadGame] = useState(true);
  const history = useHistory();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (gameStatus === "success") {
      setLoadGame(false);
      console.log(gameData);
    }
  }, [gameStatus]);

  const createLobby = (gameData) => (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      <div className="flex flex-row justify-between bg-primary rounded-xl text-white text-4xl font-bold p-4">
        <p>{gameData.theme}</p>
        <p>{`${gameData.numberOfPairs} Pairs`}</p>
      </div>
      <Select
        init={false}
        labels={{ off: "👎 I'm not ready.", on: "I'm ready to play! 👍" }}
        onChange={(value) => setReady(value)}
      />
    </div>
  );

  return (
    <div
      {...props}
      className="bg-greyscale-offWhite h-full flex flex-col justify-center items-center  w-screen"
    >
      <div className="flex flex-row justify-center gap-4">
        <Menu initiallyOpen={false}>
          <Button
            label="LEAVE GAME"
            variant="secondary"
            onClick={() => history.push("/")}
          />
        </Menu>
      </div>
      <div className="p-4 h-full w-full flex flex-row gap-4 justify-center">
        {loadGame ? (
          <div className="flex flex-col gap-4 items-center">
            <Spinner size="5rem" />
            <p>Loading Game...</p>
          </div>
        ) : (
          createLobby(gameData)
        )}
      </div>
    </div>
  );
}
