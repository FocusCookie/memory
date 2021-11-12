import React from "react";
import PropTypes from "prop-types";
import {
  getScoreboard,
  getPlaceMedal,
} from "../../services/game.online.service.mjs";

export const Scoreboard = ({ game, ...props }) => {
  return (
    <div {...props} className="flex flex-col gap-4">
      <h1 className="text-primary text-4xl font-bold text-center">
        🥳 GAME OVER 🥳
      </h1>
      <div className="flex flex-col gap-4">
        {getScoreboard(game).map((player, place) => (
          <div
            className="flex flex-row gap-2 text-2xl"
            key={player.displayName}
          >
            <span>{getPlaceMedal(place + 1)}</span>
            <span className="flex-grow text-left font-bold pr-8">
              {player.displayName}
            </span>
            <span className="font-semibold text-greyscale-placeholder">{`${player.score} Pairs`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Scoreboard.propTypes = {
  /**
   * game - game (gameData) instance of the memory game online
   */
  game: PropTypes.object.isRequired,
};

export default Scoreboard;
