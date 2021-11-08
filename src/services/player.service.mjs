import { database } from "./firebase.service.mjs";
import { ref, push, set } from "firebase/database";

export const setPlayer = (user) => {
  const player = {
    username: user.email.slice(0, user.email.indexOf("@")),
    uid: user.uid,
  };

  const playersListRef = ref(database, "players");
  const playerRef = push(playersListRef);
  set(playerRef, player);

  return playerRef;
};
