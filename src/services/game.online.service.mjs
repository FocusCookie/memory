import { initializeBoard, getCards } from "./game.offline.service.mjs";
import { database } from "./firebase.service.mjs";
import { ref, push, set, update } from "firebase/database";

export const createGameOnline = async ({
  userID,
  theme,
  numberOfPairs,
  maxNumberOfPlayers,
}) => {
  const cards = await getCards(theme, numberOfPairs);
  const board = initializeBoard(cards);
  const game = {
    creator: userID,
    players: [userID],
    currentPlayer: "",
    turns: [null],
    state: "waiting",
    rematch: { [userID]: false },
    playersReady: { [userID]: false },
    board,
    maxNumberOfPlayers,
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
