import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Menu } from "../../components/Menu/Menu";
import { Gameboard } from "../../components/Gameboard/Gameboard";
import { Modal } from "../../components/Modal/Modal";
import { getCards } from "../../services/game.service";

export function Game({ ...props }) {
  useEffect(() => {
    async function fetchCards() {
      const cards = await getCards("rickmorty", 10);
      setCards(cards);
      setLoading(false);
    }

    fetchCards();
  }, []);

  const [cards, setCards] = useState([]);
  const history = useHistory();
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div
      {...props}
      className="flex flex-col justify-center items-center h-screen w-screen"
    >
      <div className="absolute top-0 w-full">
        <Menu
          onCancel={() => history.push("/")}
          onReset={() => console.log("reset")}
          initiallyOpen={false}
        />
      </div>
      <div>
        {!loading ? (
          <>
            <Gameboard
              cards={cards}
              onGameOver={() => {
                setGameOver(true);
              }}
            />

            {gameOver && (
              <Modal>
                <h1>GAME OVER </h1>
              </Modal>
            )}
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
