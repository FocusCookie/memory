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
