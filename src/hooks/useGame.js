import { ref } from "firebase/database";
import { useDatabase, useDatabaseObjectData } from "reactfire";

export const useGame = (gameID) => {
  const database = useDatabase();
  const gameRef = ref(database, `games/${gameID}`);
  return useDatabaseObjectData(gameRef, { idField: "id" });
};
