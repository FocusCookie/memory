import React from "react";
import PropTypes from "prop-types";

export const Table = ({ headers, rows, ...props }) => {
  return (
    <table className="table" {...props}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            {row.map((cell) => (
              <td>{cell}</td>
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
