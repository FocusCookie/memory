import React from "react";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import coverImg from "../assets/Cover.jpg";

export function Home({ ...props }) {
  return (
    <div
      {...props}
      className="flex justify-center items-center w-screen h-screen bg-greyscale-offWhite"
    >
      <Card>
        <img src={coverImg} alt="Rick and Morty" style={{ width: "27rem" }} />
        <div className="p-4 pt-3">
          <h1
            className="font-black text-primary uppercase pb-4"
            style={{ fontSize: "2rem" }}
          >
            rick & morty memory
          </h1>
          <Button label="PLAY A GAME" />
        </div>
      </Card>
    </div>
  );
}
