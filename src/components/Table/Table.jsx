import React from "react";
import PropTypes from "prop-types";

export const Table = ({ headers, rows, className, ...props }) => {
  return (
    <table className={className ? className + " table" : "table"} {...props}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, i) => (
              <td key={i}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
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
};
