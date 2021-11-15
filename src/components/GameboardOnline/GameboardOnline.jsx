import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getAuth } from "firebase/auth";
import { updateGameOnline } from "../../services/game.service";
import { PlayCard } from "../PlayCard/PlayCard";

const turnIsAllowed = (turn) => turn < 2;

const endOfGame = (board) => {
  return board.every((card) => card.cleared);
};

const getNextPlayer = ({ players, currentPlayer }) => {
  const playerArray = Object.keys(players);
  const currentPlayerIndex = playerArray.indexOf(currentPlayer);
  const nextPlayerIndex = (currentPlayerIndex + 1) % playerArray.length;
  return playerArray[nextPlayerIndex];
};

const revealCard = ({ cardID, board }) => {
  const newBoard = board.map((card) => {
    if (cardID === card.id) {
      return {
        ...card,
        reveal: true,
      };
    }
    return card;
  });
  return newBoard;
};

const unrevealCards = (board) => {
  return board.map((card) => (card.reveal ? { ...card, reveal: false } : card));
};

const revealedCardsMatch = (board) => {
  const revealedCards = board.filter((card) => card.reveal);
  return (
    revealedCards.map((card) => card.id).reduce((acc, cur) => acc + cur) === 0
  );
};
const clearCards = (board) => {
  return board.map((card) => {
    return card.reveal ? { ...card, cleared: true, reveal: false } : card;
  });
};

export const GameboardOnline = ({ game, ...props }) => {
  const { id: gameID, board, turn } = game;
  const userID = getAuth().currentUser.uid;
  const itsMyTurn = userID === game.currentPlayer;
  const endOfTurn = turn === 2;

  const handleEndOfTurn = () => {
    if (revealedCardsMatch(board)) {
      const newScores = game.scores[userID] + 1;
      const newBoard = clearCards(board);
      const updates = {
        turn: 0,
        board: newBoard,
        [`scores/${userID}`]: newScores,
      };
      if (endOfGame(newBoard)) updates.state = "done";
      updateGameOnline({
        gameID,
        updates,
      });
    } else {
      const newBoard = unrevealCards(board);
      const nextPlayer = getNextPlayer(game);
      updateGameOnline({
        gameID,
        updates: {
          turn: 0,
          board: newBoard,
          currentPlayer: nextPlayer,
        },
      });
    }
  };

  useEffect(() => {
    if (!itsMyTurn || !endOfTurn) return;

    const timeoutID = setTimeout(() => {
      handleEndOfTurn();
    }, 1000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [turn]);

  const handleCardReveal = (cardID) => {
    const newBoard = revealCard({ cardID, board });
    const newturn = turn + 1;
    updateGameOnline({
      gameID,
      updates: {
        turn: newturn,
        board: newBoard,
      },
    });
  };

  const handlePlaycardClick = async (cardID) => {
    if (!itsMyTurn || !turnIsAllowed(turn)) return;
    await handleCardReveal(cardID);
  };

  const renderCard = (card) => {
    return (
      <PlayCard
        key={card.id}
        onClick={() => handlePlaycardClick(card.id)}
        {...card}
      />
    );
  };

  return (
    <div className="board-online" {...props}>
      {board.map((card) => renderCard(card))}
    </div>
  );
};

GameboardOnline.propTypes = {
  game: PropTypes.object.isRequired,
};
