import { initializeBoard, getCards } from "./game.service.mjs";
import { database } from "./firebase.service.mjs";
import { ref, push, set } from "firebase/database";
import { getAuth } from "firebase/auth";

export const createGameOnline = async ({
  // TODO: remove default values in production
  userID = "myFakeUserID",
  displayName = "myFakeDisplayName",
  theme,
  numberOfPairs,
  maxPlayers,
}) => {
  const cards = await getCards(theme, numberOfPairs);
  const board = initializeBoard(cards);
  const game = {
    creator: userID,
    players: { [userID]: { displayName } },
    currentPlayer: "",
    turns: [],
    state: "waiting",
    rematch: { [userID]: false },
    playersReady: { [userID]: false },
    board,
    maxPlayers,
    theme,
    numberOfPairs,
  };
  const gamesListRef = ref(database, "games");
  const gameRef = push(gamesListRef);
  set(gameRef, game);
  return gameRef;
};

export const joinGameOnline = async (gameId) => {
  const auth = getAuth();
  const gamePlayersRef = ref(
    database,
    `games/${gameId}/players/${auth.currentUser.uid}`
  );
  const test = await set(gamePlayersRef, {
    displayName: auth.currentUser.displayName,
  });
  return test;
};
