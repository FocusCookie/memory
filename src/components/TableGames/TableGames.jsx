import React from "react";
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

  if (status === "error") return <div>Oops, something went wrong 👻</div>;
  if (status === "loading") return <Spinner size="5rem" />;

  const headers = ["Theme", "# of Players", "# of Pairs", "Action"];
  const rows = data.map(
    ({ id, theme, maxNumberOfPlayers, players, numberOfPairs }) => [
      theme,
      `${players?.length}/${maxNumberOfPlayers}`,
      numberOfPairs,
      <Button
        label="JOIN"
        variant="secondary"
        onClick={() => joinGameOnline(id)}
      />,
    ]
  );
  return (
    <Table scrollable={true} card={true} {...{ headers, rows, ...props }} />
  );
};
