import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import { createGameOnline, themes } from "../../services/game.service.mjs";
import { useHistory } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import { IncrementStepper } from "../IncrementStepper/IncrementStepper";
import { Card } from "../Card/Card";
import { getAuth } from "firebase/auth";

export const CreateGame = ({ initMaxPlayers, initNumberOfPairs, ...props }) => {
  const [theme, setTheme] = useState(themes[0]);
  const [maxPlayers, setMaxPlayers] = useState(initMaxPlayers);
  const [numberOfPairs, setNumberOfPairs] = useState(initNumberOfPairs);
  const [creatingGame, setCreatingGame] = useState(false);
  const history = useHistory();
  const auth = getAuth();
  const createGame = async () => {
    setCreatingGame(true);
    const gameID = await createGameOnline({
      theme,
      maxPlayers,
      numberOfPairs,
      userID: auth?.currentUser?.uid,
      displayName: auth?.currentUser?.displayName,
    });
    history.push(`/online/games/${gameID}`);
  };

  return (
    <div className="create-game" {...props}>
      <Card>
        <div className="create-game__settings">
          <Dropdown
            label="THEME"
            elements={themes}
            onChange={(value) => setTheme(value)}
          />
          <IncrementStepper
            label="PLAYERS"
            onChange={(value) => setMaxPlayers(value)}
            min={2}
          />
          <IncrementStepper
            label="CARD PAIRS"
            onChange={(value) => setNumberOfPairs(value)}
            min={1}
          />
        </div>
      </Card>
      <div className="create-game__buttons">
        <Button
          label="CREATE"
          onClick={createGame}
          loading={creatingGame}
          disabled={creatingGame}
        />
        <Button
          label="CANCEL"
          variant="secondary"
          onClick={() => history.push("/online")}
          disabled={creatingGame}
        />
      </div>
    </div>
  );
};

CreateGame.propTypes = {
  initMaxPlayers: PropTypes.number,
  initNumberOfPairs: PropTypes.number,
};

CreateGame.defaultProps = {
  initMaxPlayers: 2,
  initNumberOfPairs: 8,
};
