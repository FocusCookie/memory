import React from "react";
import PropTypes from "prop-types";
import { Table } from "../Table/Table";

export function OnlinePlayers({ players, ...props }) {
  const headers = ["Online Players"];
  const rows = players.sort().map((player) => [player]);

  return (
    <div className="onlinePlayers">
      <Table className="w-full" headers={headers} rows={rows} {...props} />
    </div>
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
