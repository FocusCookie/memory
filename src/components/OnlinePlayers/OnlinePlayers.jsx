import React from "react";
import PropTypes from "prop-types";
import { Table } from "../Table/Table";

export function OnlinePlayers({ players, ...props }) {
  const headers = ["Online Players"];
  const rows = players.sort().map((player) => [player]);

  return (
    <Table
      headers={headers}
      rows={rows}
      scrollable={true}
      card={true}
      {...props}
    />
  );
}

OnlinePlayers.propTypes = {
  /**
   * Player which are online
   */
  players: PropTypes.array,
};

OnlinePlayers.defaultProps = {
  players: [],
};
