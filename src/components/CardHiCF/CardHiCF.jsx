import React from "react";
import { Card } from "../Card/Card";
import PropTypes from "prop-types";

// PARENT width="24rem"

export function CardHiCF({ img, content, footer, width, ...props }) {
  return (
    <Card style={{ width }} {...props}>
      <img src={img.src} alt={img.alt} style={{ width }} />
      <div className="p-4 pt-3 flex flex-col gap-4">
        {content}
        {footer}
      </div>
    </Card>
  );
}

CardHiCF.propTypes = {
  /**
   * image object containing source and alt
   */
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  /**
   * Content element
   */
  content: PropTypes.element,
  /**
   * Footer element
   */
  footer: PropTypes.element,
  /**
   * Card width,
   */
  width: PropTypes.string,
};
