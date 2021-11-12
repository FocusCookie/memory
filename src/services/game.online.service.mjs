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

export const joinGameOnline = async (gameId) => {
  const auth = getAuth();
  const gamePlayersRef = ref(
    database,
    `games/${gameId}/players/${auth.currentUser.uid}`
  );

  await set(gamePlayersRef, {
    displayName: auth.currentUser.displayName,
  });

  await setPlayerStatus(gameId, false);
  return true;
};

export const leaveGameOnline = async (gameId) => {
  const auth = getAuth();
  const gamePlayersRef = ref(
    database,
    `games/${gameId}/players/${auth.currentUser.uid}`
  );

  await set(gamePlayersRef, {
    displayName: null, // if a value is null firebase deletes the entry
  });

  await setPlayerStatus(gameId, null);
  return true;
};

export const setPlayerStatus = async (gameId, status) => {
  const auth = getAuth();
  const gamePlayersRef = ref(
    database,
    `games/${gameId}/playersReady/${auth.currentUser.uid}`
  );
  await set(gamePlayersRef, status);
  return true;
};

export const checkIfAllPlayersAreReady = (gameData) => {
  const playersStates = Object.values(gameData.playersReady);
  const allPlayersWhichAreReady = playersStates.filter((state) => state);

  return allPlayersWhichAreReady.length === playersStates.length;
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

export const getScoreboard = (gameData) => {
  if (!gameData || !gameData?.scores || !gameData?.players)
    throw new Error("Invalid gameData");
  const players = Object.entries(gameData.players);
  const scores = gameData.scores;

  const playersWithScores = players.map((player) => {
    // player[0] uid player[1] displayName
    return { ...player[1], score: scores[player[0]] };
  });

  const scoreBoard = playersWithScores.sort((a, b) => b.score - a.score);
  return scoreBoard;
};

export const getPlaceMedal = (place) => {
  if (place === 1) return "🥇";
  if (place === 2) return "🥈";
  if (place === 3) return "🥉";
  return "🎖";
};
