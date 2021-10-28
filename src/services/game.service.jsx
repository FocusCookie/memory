const shuffle = (array) => [...array].sort((a, b) => 0.5 - Math.random());

export const initializeBoard = (characters) => {
  // split into two functions, seperating sideeffect of getting data
  const board = [];
  for (const character of characters) {
    const firstOfPair = {
      character,
      id: Number(character.id),
      reveal: false,
      cleared: false,
    };
    const secondOfPair = {
      character,
      id: -Number(character.id),
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

export const isPair = (ids) => ids[0] - ids[1] === 0;

// const endOfTurn = () => {
//     updateBoardState();
//     determineGameEnd();
// }

// const turn = {first: null, second:null}

// const updateTurn = () => {
//     // turn 1 hat id 1 {first: 1, second: null}

//     // mit timeout
//     checkForClear(()=>{
//         // wenn first and sec gleiche id dann clear item in playCardsArray/board
//     });

//         // im timeout danach
//         endOfTurn();
// }

// const [turn, setTurn] = useState(0);
// const card = {
//     id: 1,
//     img: "morty.jpg",
//     name: "morty"
// }

// <PlayCard reveal={card[1].releavl} cleared={card[1].releavl} onClick={(id) => {updateTurn(id)}} />

// shuffleCardsArray(array)

// hallo Stephan =D
