import { getCards as getRickAndMortyCards } from "./rickmorty.service.mjs";
import { getCards as getDisneyCards } from "./disney.services.mjs";
import { getCards as getAmiiboCards } from "./amiibo.services.mjs";

export const getCards = async function (theme, amount) {
  if (theme === "disney") {
    return getDisneyCards(amount);
  }
  if (theme === "amiibo") {
    return getAmiiboCards(amount);
  }

  return getRickAndMortyCards(amount);
};

const shuffle = (array) => [...array].sort((a, b) => 0.5 - Math.random());

export const initializeBoard = (cards) => {
  // split into two functions, seperating sideeffect of getting data
  const board = [];
  for (const card of cards) {
    const firstOfPair = {
      card,
      id: Number(card.id),
      reveal: false,
      cleared: false,
    };
    const secondOfPair = {
      card,
      id: -Number(card.id),
      reveal: false,
      cleared: false,
    };
    board.push(firstOfPair);
    board.push(secondOfPair);
  }

  return shuffle(board);
};

export const endOfTurn = (turn) => turn.length === 2;

export const gameIsOver = (board) =>
  board.filter((card) => card.cleared).length === board.length;

export const isPair = (ids) => ids[0] + ids[1] === 0;

export const turnIsAllowed = (turn) => turn.length < 2;
