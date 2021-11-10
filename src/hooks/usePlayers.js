import { ref } from "firebase/database";
import { useDatabase, useDatabaseListData } from "reactfire";

export const usePlayers = () => {
  const database = useDatabase();
  const playersListRef = ref(database, "players");
  return useDatabaseListData(playersListRef, { idField: "id" });
};
