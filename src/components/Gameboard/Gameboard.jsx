import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  initializeBoard,
  endOfTurn,
  gameIsOver,
  isPair,
} from "../../services/game.service";
import { PlayCard } from "../PlayCard/PlayCard";
import { Modal } from "../Modal/Modal";

export const Gameboard = ({ characters, ...props }) => {
  const [board, setBoard] = useState(initializeBoard(characters));
  const [turn, setTurn] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const clearCards = (ids) => {
    const newBoard = board.map((card) => {
      if (ids.includes(card.id)) {
        return {
          ...card,
          reveal: false,
          clear: true,
        };
      }
      return card;
    });

    setBoard(newBoard);
  };

  const unrevealCards = (ids) => {
    const newBoard = board.map((card) => {
      if (ids.includes(card.id)) {
        return {
          ...card,
          reveal: false,
        };
      }
      return card;
    });

    setBoard(newBoard);
  };

  const handleRevealedCards = () => {
    if (isPair(turn)) {
      clearCards();
    } else {
      unrevealCards(turn);
    }
  };

  const handleEndOfTurn = () => {
    console.log("EOT");
    handleRevealedCards();
    setTurn([]);
    setTurnCounter(turnCounter + 1);
  };

  const updateBoard = (id) => {
    const newBoard = board.map((card) => {
      if (id === card.id) {
        return {
          ...card,
          reveal: true,
        };
      }
      return card;
    });

    setBoard(newBoard);
  };

  const updateTurn = (id) => {
    setTurn([...turn, id]);
  };

  const handlePlaycardClick = (id) => {
    console.log("clicked: ", id);

    updateTurn(id);
    updateBoard(id);

    if (endOfTurn(turn)) handleEndOfTurn();
    if (gameIsOver(board)) setGameOver(true);
  };

  // useEffect(() => {
  //   if (endOfTurn(turn)) handleEndOfTurn();
  //   if (gameIsOver(board)) setGameOver(true);
  // }, [turn, board]);

  const renderCard = (card) => {
    // card.id = Number(card.id);
    return (
      <PlayCard
        key={card.id}
        onClick={() => handlePlaycardClick(card.id)}
        {...card}
      />
    );
  };

  return (
    <>
      <div className="board">{board.map((card) => renderCard(card))}</div>
      {gameOver && (
        <Modal>
          <h1>GAME OVER</h1>
        </Modal>
      )}
    </>
  );
};

Gameboard.propTypes = {
  /**
   * Number of pairs to play with
   */
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
      }),
    })
  ).isRequired,
};

Gameboard.defaultProps = {};
