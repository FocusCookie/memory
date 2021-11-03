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

export const createCardObject = (character, index, theme) => {
  if (!character) throw new Error("Character is undefined");

  if (theme === "disney") {
    //TODO: Limit the characters from the disney api because some of the chars doesn't have an imageUrl
    let image =
      "https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png";

    // if the character has an image cut out the revision if no image is given the disney logo will be used
    const end = character.imageUrl
      ? character.imageUrl.indexOf("/revision")
      : -1;
    if (end > -1) image = character.imageUrl.slice(0, end);

    return {
      id: index + 1,
      name: character.name,
      image: image,
    };
  }

  return {
    id: index + 1,
    name: character.name,
    image: character.image,
  };
};
