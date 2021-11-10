import React from "react";
import PropTypes from "prop-types";
import { useGames } from "../../hooks/useGames";
import { Table } from "../Table/Table";
import { Button } from "../Button/Button";

const joinGameOnline = (id) => {
  console.log("Joined Game:", id);
};

export const TableGames = ({ ...props }) => {
  const { status, data } = useGames();

  if (status === "error") return <div>Oops, something went wrong 👻</div>;
  if (status === "loading") return <div>loading...</div>;

  const headers = ["Theme", "# of Players", "# of Pairs", "Action"];
  const rows = data.map(
    ({ theme, maxNumberOfPlayers, players, numberOfPairs }) => [
      state,
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

TableGames.propTypes = {};
