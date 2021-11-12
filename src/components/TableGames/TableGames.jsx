import React from "react";
import { useHistory } from "react-router";
import { useGames } from "../../hooks/useGames";
import { Table } from "../Table/Table";
import { Button } from "../Button/Button";
import { Spinner } from "../Spinner/Spinner";
import { joinGameOnline } from "../../services/game.online.service.mjs";

const gameIsNotFull = (maxPlayers, players) => {
  if (players === undefined) return true; //TODO: Should be changed, But now the game is init without players object

  const playersCount = Object.keys(players).length;
  return playersCount < maxPlayers ? true : false;
};

export const TableGames = ({ ...props }) => {
  const { status, data } = useGames();
  const history = useHistory();

  const handleJoinGame = async (gameId) => {
    try {
      await joinGameOnline(gameId);
      history.push(`/online/games/${gameId}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (status === "error") return <div>Oops, something went wrong 👻</div>;
  if (status === "loading") return <Spinner size="5rem" />;

  const headers = ["Theme", "# of Players", "# of Pairs", "Action"];
  const rows = data
    ?.filter(
      ({ maxPlayers, players, state }) =>
        gameIsNotFull(maxPlayers, players || []) && state === "waiting"
    )
    ?.map(({ id, theme, maxPlayers, players, numberOfPairs }) => [
      theme,
      `${Object.keys(players || []).length}/${maxPlayers}`,
      numberOfPairs,
      <Button
        label="JOIN"
        variant="secondary"
        onClick={() =>
          gameIsNotFull(maxPlayers, players) ? handleJoinGame(id) : null
        }
      />,
    ]);
  return (
    <Table scrollable={true} card={true} {...{ headers, rows, ...props }} />
  );
};
