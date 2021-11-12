import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button } from "../../components/Button/Button";
import { Menu } from "../../components/Menu/Menu";
import { Select } from "../../components/Select/Select";
import { Table } from "../../components/Table/Table";
import { Spinner } from "../../components/Spinner/Spinner";
import { Status } from "../../components/Status/Status";
import { useParams } from "react-router-dom";
import { useGame } from "../../hooks/useGame";
import {
  getPlayerStatusProperty,
  playersLobbyStatusLabels,
} from "../../services/player.service.mjs";
import {
  leaveGameOnline,
  setPlayerStatus,
} from "../../services/game.online.service.mjs";

export function OnlineGameView({ ...props }) {
  const { gameId } = useParams();
  const { status: gameStatus, data: gameData } = useGame(gameId);
  const [loadGame, setLoadGame] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (gameStatus === "success") {
      setLoadGame(false);
      console.log(gameData);
    }
  }, [gameStatus]);

  const playerStatusHandler = async (status) => {
    try {
      await setPlayerStatus(gameId, status);
    } catch (error) {
      console.log(error);
    }
  };

  const createLobbyRows = (gameData) => {
    const playerStates = gameData.playersReady;
    const playersRow = Object.entries(gameData.players).map(
      ([userId, user]) => {
        return [
          user.displayName,
          <Status
            status={getPlayerStatusProperty(playerStates[userId])}
            labels={playersLobbyStatusLabels}
          />,
        ];
      }
    );

    return playersRow;
  };

  const showLobby = (gameData) => (
    <div className="flex flex-col gap-8 w-full max-w-2xl">
      <div className="flex flex-row justify-between bg-primary rounded-xl text-white text-4xl font-bold p-4">
        <p>{gameData.theme}</p>
        <p>{`${gameData.numberOfPairs} Pairs`}</p>
      </div>
      <Select
        init={false}
        labels={{ off: "👎 I'm not ready.", on: "I'm ready to play! 👍" }}
        onChange={(status) => playerStatusHandler(status)}
      />
      <Table
        card
        headers={["Player", "Status"]}
        rows={createLobbyRows(gameData)}
      />
    </div>
  );

  const leaveHandler = async (gameId) => {
    try {
      await leaveGameOnline(gameId);
      history.push("/online");
    } catch (error) {
      console.log(error);
    }
  };

  const createPlayersGameRows = (gameData) => {
    const players = gameData.players;
    const scores = gameData.scores;
    const playersRow = Object.entries(players).map(([userId, user]) => {
      return [user.displayName, scores[userId]];
    });

    return playersRow;
  };

  const highlightNumberOfCurrentPlayer = (gameData) => {
    const numOfCurrentPlayer = Object.entries(gameData.players)
      .map(([userId]) => userId)
      .indexOf(gameData.currentPlayer);

    // plus one because in the table component 0 is the header
    return numOfCurrentPlayer + 1;
  };

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
            onClick={() => leaveHandler(gameId)}
          />
        </Menu>
      </div>
      <div className="p-4 h-full w-full flex flex-col gap-4 justify-start items-center">
        {loadGame ? (
          <div className="flex flex-col gap-4 items-center">
            <Spinner size="5rem" />
            <p>Loading Game...</p>
          </div>
        ) : gameData.state === "waiting" ? (
          showLobby(gameData)
        ) : (
          <div className="flex flex-row gap-4 justify-between items-start w-full">
            <div className="w-min">
              <Table
                card
                headers={["Player", "Score"]}
                rows={createPlayersGameRows(gameData)}
                highlight={highlightNumberOfCurrentPlayer(gameData)}
              />
            </div>
            <h1 className="text-9xl text-primary flex-grow">🎮 GAME TIME 🎮</h1>
          </div>
        )}
      </div>
    </div>
  );
}
