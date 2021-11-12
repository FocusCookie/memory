import { initializeBoard, getCards } from "./game.service.mjs";
import { database } from "./firebase.service.mjs";
import { ref, push, set, update, get } from "firebase/database";
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

export const joinGameOnline = ({ userID, gameID }) => {
  const updates = {
    [`games/${gameID}/players/${userID}`]: true,
  };
  return update(ref(database), updates);
};

export const setGameState = async (gameId, state) => {
  const gameStateRef = ref(database, `games/${gameId}/state`);
  const snapshot = await get(gameStateRef);

  if (snapshot.exists()) {
    const currentState = snapshot.val();
    if (currentState !== state) {
      await set(gameStateRef, state);
      return true;
    } else {
      return false;
    }
  } else {
    throw new Error("Couldn't set state for game/" + gameId);
  }
};
