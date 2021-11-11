import { initializeBoard, getCards } from "./game.service.mjs";
import { database } from "./firebase.service.mjs";
import { ref, push, set, update } from "firebase/database";

export const createGameOnline = async ({
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
