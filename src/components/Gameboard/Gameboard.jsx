import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  initializeBoard,
  endOfTurn,
  gameIsOver,
  isPair,
} from "../../services/game.service";
import { PlayCard } from "../PlayCard/PlayCard";
import { Modal } from "../Modal/Modal";

export const Gameboard = ({ cards, ...props }) => {
  const [board, setBoard] = useState(initializeBoard(cards));
  const [turn, setTurn] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const clearCards = (ids) => {
    const newBoard = board.map((card) => {
      if (ids.includes(card.id)) {
        return {
          ...card,
          reveal: false,
          cleared: true,
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

  const handleRevealedCards = (turn) => {
    if (isPair(turn)) {
      clearCards(turn);
    } else {
      unrevealCards(turn);
    }
  };

  const handleEndOfTurn = (turn) => {
    handleRevealedCards(turn);
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
    updateTurn(id);
    updateBoard(id);
  };

  useEffect(() => {
    setTimeout(() => {
      if (endOfTurn(turn)) handleEndOfTurn(turn);
      if (gameIsOver(board)) setGameOver(true);
    }, 1000);
  }, [turn]);

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
    <>
      <div className="board" {...props}>
        {board.map((card) => renderCard(card))}
      </div>
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
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
      }),
    })
  ).isRequired,
};

Gameboard.defaultProps = {};
