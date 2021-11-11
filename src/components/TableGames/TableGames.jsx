import React from "react";
import { useHistory } from "react-router";
import { useGames } from "../../hooks/useGames";
import { Table } from "../Table/Table";
import { Button } from "../Button/Button";
import { Spinner } from "../Spinner/Spinner";

// TODO: replace with proper function
const joinGameOnline = (id) => {
  console.log("Joined Game:", id);
};

export const TableGames = ({ ...props }) => {
  const { status, data } = useGames();
  const history = useHistory();

  if (status === "error") return <div>Oops, something went wrong 👻</div>;
  if (status === "loading") return <Spinner size="5rem" />;

  const headers = ["Theme", "# of Players", "# of Pairs", "Action"];
  const rows = data.map(({ id, theme, maxPlayers, players, numberOfPairs }) => [
    theme,
    `${Object.keys(players).length}/${maxPlayers}`,
    numberOfPairs,
    <Button
      label="JOIN"
      variant="secondary"
      onClick={() => history.push(`/online/games/${id}`)}
    />,
  ]);
  return (
    <Table scrollable={true} card={true} {...{ headers, rows, ...props }} />
  );
};
