import { ref } from "firebase/database";
import { useDatabase, useDatabaseListData } from "reactfire";

export const useGames = () => {
  const database = useDatabase();
  const gamesListRef = ref(database, "games");
  return useDatabaseListData(gamesListRef, { idField: "id" });
};
