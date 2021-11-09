import React from "react";
import { Card } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import coverImg from "../../assets/Cover.jpg";

export function Home({ ...props }) {
  const history = useHistory();
  return (
    <div
      {...props}
      className="flex flex-col gap-8 justify-center items-center  bg-greyscale-offWhite w-screen h-full"
    >
      <Card>
        <img src={coverImg} alt="Rick and Morty" style={{ width: "27rem" }} />
        <div className="p-4 pt-3 flex flex-col gap-4">
          <h1
            className="font-black text-primary uppercase"
            style={{ fontSize: "2rem" }}
          >
            rick & morty memory
          </h1>
          <Button
            label="PLAY A GAME"
            onClick={() => {
              history.push("/game");
            }}
          />
        </div>
      </Card>

      <div className="flex flex-col items-center text-gray-400">
        <p>enjoy 🎮 - made with ❤️</p>
        <p>
          <a href="https://github.com/FocusCookie/memory">Github</a>
        </p>
      </div>
    </div>
  );
}
