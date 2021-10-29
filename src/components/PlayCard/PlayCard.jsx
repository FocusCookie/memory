import React from "react";
import PropTypes from "prop-types";

export const PlayCard = ({ reveal, cleared, onClick, card, ...props }) => {
  return (
    <div
      className="playCard"
      onClick={() => (!cleared && !reveal ? onClick() : null)}
      {...props}
    >
      {cleared ? null : (
        <div className={reveal ? "playCard__inner flip" : "playCard__inner"}>
          <div className="playCard__front"></div>
          <div
            className="playCard__back"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            {card.name}
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
   * holds card data
   */
  card: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  /**
   * Cleared - if true the card will be displayed as empty
   */
  cleared: PropTypes.bool,
  /**
   * reveal - If true show the image from card.image
   */
  reveal: PropTypes.bool,
};

PlayCard.defaultProps = {
  card: {},
  cleared: false,
  reveal: false,
  onClick: undefined,
};
