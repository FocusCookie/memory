import React from "react";
import { Table } from "../Table/Table";
import { Spinner } from "../Spinner/Spinner";
import { useDatabaseListData, useDatabase } from "reactfire";
import { ref } from "firebase/database";

export function OnlinePlayers({ ...props }) {
  const database = useDatabase();
  const onlinePlayersListRef = ref(database, "onlinePlayers");
  const {
    data: onlinePlayers,
    status: onlinePlayerStatus,
  } = useDatabaseListData(onlinePlayersListRef, {
    idField: "id",
  });

  const headers = ["Online Players"];
  const rows = onlinePlayers
    ? onlinePlayers.map((player) => [player.username]).sort()
    : [];

  if (onlinePlayerStatus === "error")
    return <div>Oops, something went wrong 👻</div>;
  if (onlinePlayerStatus === "loading") return <Spinner size="5rem" />;

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
