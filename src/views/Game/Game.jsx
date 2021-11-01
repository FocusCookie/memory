import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Menu } from "../../components/Menu/Menu";
import { Gameboard } from "../../components/Gameboard/Gameboard";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { CardHiCF } from "../../components/CardHiCF/CardHiCF";
import { getCards } from "../../services/game.service";
import cover from "../../assets/Cover.jpg";

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
  const [gameCount, setGameCount] = useState(1);
  const [loading, setLoading] = useState(true);

  const resetGame = function () {
    setGameCount((last) => last + 1);
    setGameOver(false);
  };

  const gameOverCard = {
    img: {
      src: cover,
      alt: "Rick & Morty",
    },
    content: (
      <div className="p-4 pt-3 flex flex-col gap-4">
        <p
          className="font-black text-primary uppercase"
          style={{ fontSize: "2rem" }}
        >
          🎉 Congratulation 🎉
        </p>
        <p
          className="font-black text-primary uppercase"
          style={{ fontSize: "2rem" }}
        >
          you finished the game!
        </p>
      </div>
    ),
    footer: (
      <div>
        <Button
          label="PLAY AGAIN"
          onClick={() => {
            resetGame();
          }}
        />
      </div>
    ),
  };

  return (
    <div
      {...props}
      className="flex flex-col justify-center items-center  w-screen"
    >
      <div>
        <Menu
          onCancel={() => history.push("/")}
          onReset={() => resetGame()}
          initiallyOpen={false}
        />
      </div>
      <div className="p-10">
        {!loading ? (
          <>
            <Gameboard
              cards={cards}
              onGameOver={() => {
                setGameOver(true);
              }}
              key={gameCount}
            />

            {gameOver && (
              <Modal>
                <div className="w-1/2 opacity-100">
                  <CardHiCF
                    img={gameOverCard.img}
                    content={gameOverCard.content}
                    footer={gameOverCard.footer}
                  />
                </div>
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
