import React from "react";
import PropTypes from "prop-types";
import { Card } from "../Card/Card";

export const Table = ({
  headers,
  rows,
  card,
  scrollable,
  className,
  highlight,
  ...props
}) => {
  let table = (
    <table className={className ? "table " + className : "table"} {...props}>
      {headers && (
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className={i + 1 === highlight ? "table-row--highlight" : ""}
          >
            {row.map((cell, i) => (
              <td key={i}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  if (scrollable) table = <div className="scrollable">{table}</div>;
  if (card) table = <Card>{table}</Card>;
  return table;
};

Table.propTypes = {
  /**
   * Headers
   */
  headers: PropTypes.arrayOf(PropTypes.string),
  /**
   * Rows
   */
  rows: PropTypes.arrayOf(PropTypes.array),
  /**
   * Should the table be rendered as a card?
   */
  card: PropTypes.bool,
  /**
   * Should the table be scrollable?
   */
  scrollable: PropTypes.bool,
  /**
   * A row to highlight, indexed by 1
   */
  highlight: PropTypes.number,
};

Table.defaultProps = {
  card: false,
  scrollable: false,
};
