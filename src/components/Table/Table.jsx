import React from "react";
import PropTypes from "prop-types";

export const Table = ({ headers, rows, className, ...props }) => {
  return (
    <table className={className ? "table " + className : "table"} {...props}>
      <thead>
        <tr>
          {headers.map((header, headerIndex) => (
            <th key={`th-${headerIndex}-${Math.random()}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={`tr-${rowIndex}-${Math.random()}`}>
            {row.map((cell, tdIndex) => (
              <td key={`td-${tdIndex}-${Math.random()}`}>{cell}</td>
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
