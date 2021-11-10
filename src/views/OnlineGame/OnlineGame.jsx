import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components/Button/Button";

export function OnlineGame({ ...props }) {
  const history = useHistory();

  return (
    <div
      {...props}
      className="flex flex-col justify-center items-center  w-screen"
    >
      <div className="flex flex-row justify-center gap-4">
        <Button
          label="CANCEL GAME"
          variant="secondary"
          onClick={() => history.push("/")}
        />
      </div>
      <div className="p-10">
        <h1>Here will be the lobby!</h1>
      </div>
    </div>
  );
}
