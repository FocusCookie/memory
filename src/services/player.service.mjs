import { database } from "./firebase.service.mjs";
import { ref, set, child } from "firebase/database";

export const setPlayer = async (user) => {
  const player = {
    username: user.email.slice(0, user.email.indexOf("@")),
  };

  const playersListRef = ref(database, "players");
  const playerRef = child(playersListRef, user.uid);
  await set(playerRef, player);

  return playerRef;
};

export const setPlayerOnline = async (
  onlinePlayers,
  user,
  callbackWithPlayerRef
) => {
  if (
    !onlinePlayers.data ||
    !onlinePlayers.data.find((player) => player.id === user.uid)
  ) {
    const player = await setPlayer(user);
    callbackWithPlayerRef(player);
  } else {
    const player = ref(database, `players/${user.uid}`);
    callbackWithPlayerRef(player);
  }
};
