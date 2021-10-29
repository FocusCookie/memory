import React from "react";
import PropTypes from "prop-types";

export const PlayCard = ({ reveal, cleared, onClick, character, ...props }) => {
  return (
    <div
      className="playCard"
      onClick={() => (!cleared && !reveal ? onClick() : null)}
      {...props}
    >
      {cleared ? null : (
        <div class={reveal ? "playCard__inner flip" : "playCard__inner"}>
          <div class="playCard__front"></div>
          <div
            class="playCard__back"
            style={{ backgroundImage: `url(${character.image})` }}
          >
            {character.name}
          </div>
        </div>
      )}
    </div>
  );
};

PlayCard.propTypes = {
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Character which is represented by the card
   */
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  /**
   * Cleared - if true the card will be displayed as empty
   */
  cleared: PropTypes.bool,
  /**
   * reveal - If true show the image from character.image
   */
  reveal: PropTypes.bool,
};

PlayCard.defaultProps = {
  character: {},
  cleared: false,
  reveal: false,
  onClick: undefined,
};
