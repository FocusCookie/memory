import { database } from "./firebase.service.mjs";
import { ref, set, child } from "firebase/database";

export const setPlayerOnline = async (user) => {
  const player = {
    username: user.email.slice(0, user.email.indexOf("@")),
  };

  const playersListRef = ref(database, "onlinePlayers");
  const playerRef = child(playersListRef, user.uid);
  await set(playerRef, player);

  return playerRef;
};
