import React from "react";
import { Card } from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";
import { Menu } from "../../components/Menu/Menu";
import { useHistory } from "react-router-dom";
import coverImg from "../../assets/Cover.jpg";
import { logout } from "../../services/auth.service.mjs";

export function Home({ ...props }) {
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div
      {...props}
      className="flex flex-col gap-8 justify-start items-center  bg-greyscale-offWhite w-screen h-full"
    >
      <Menu initiallyOpen={false}>
        <Button
          label="LOGOUT"
          variant="secondary"
          onClick={() => {
            handleLogout();
          }}
        />
      </Menu>
      <Card>
        <img src={coverImg} alt="Rick and Morty" style={{ width: "27rem" }} />
        <div className="p-4 pt-3 flex flex-col gap-4">
          <h1
            className="font-black text-primary uppercase"
            style={{ fontSize: "2rem" }}
          >
            rick & morty memory
          </h1>
          <div className="flex flex-row gap-4 justify-evenly">
            <Button
              label="PLAY ALONE"
              onClick={() => {
                history.push("/offline");
              }}
            />
            <Button
              label="PLAY ONLINE"
              onClick={() => {
                history.push("/online");
              }}
            />
          </div>
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
