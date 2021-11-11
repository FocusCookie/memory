import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import { createGameOnline } from "../../services/game.service.mjs";
import { useHistory } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import { IncrementStepper } from "../IncrementStepper/IncrementStepper";
import { Card } from "../Card/Card";
import { getAuth } from "firebase/auth";

const themes = ["Rock & Morty", "Disney", "Amiibos"];

export const CreateGame = ({ initMaxPlayers, initNrOfPairs, ...props }) => {
  const [theme, setTheme] = useState("");
  const [maxPlayers, setMaxPlayers] = useState(initMaxPlayers);
  const [nrOfPairs, setNrOfPairs] = useState(initNrOfPairs);
  const history = useHistory();
  const auth = getAuth();
  const uid = auth?.currentUser?.uid;

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
          />
          <IncrementStepper
            label="CARD PAIRS"
            onChange={(value) => setNrOfPairs(value)}
          />
        </div>
      </Card>
      <div className="create-game__buttons">
        <Button
          label="CREATE"
          onClick={() =>
            createGameOnline({ theme, maxPlayers, nrOfPairs, uid })
          }
        />
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
  initNrOfPairs: PropTypes.number,
};

CreateGame.defaultProps = {
  initMaxPlayers: 2,
  initNrOfPairs: 8,
};
