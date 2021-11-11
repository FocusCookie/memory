import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import { createGameOnline } from "../../services/game.service.mjs";
import { useHistory } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import { IncrementStepper } from "../IncrementStepper/IncrementStepper";
import { Card } from "../Card/Card";
import { getAuth } from "firebase/auth";

const themes = ["Rick & Morty", "Disney", "Amiibos"];

export const CreateGame = ({ initMaxPlayers, initNumberOfPairs, ...props }) => {
  const [theme, setTheme] = useState(themes[0]);
  const [maxPlayers, setMaxPlayers] = useState(initMaxPlayers);
  const [numberOfPairs, setNumberOfPairs] = useState(initNumberOfPairs);
  const history = useHistory();
  const auth = getAuth();
  const createGame = async () => {
    const gameID = await createGameOnline({
      theme,
      maxPlayers,
      numberOfPairs,
      userID: auth?.currentUser?.uid,
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
        <Button label="CREATE" onClick={createGame} />
        <Button
          label="CANCEL"
          variant="secondary"
          onClick={() => history.push("/")}
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
