import React, { JSX } from "react";

interface Props<T> {
  table_header: string[];
  table_data: T[];
  page: string;
  openModal?: (row: T) => void;
  renderRow: (row: T) => React.ReactNode;
}

const Table = <T extends Record<string, any>>({
  table_header,
  table_data,
  renderRow,
  openModal
}: Props<T>): JSX.Element => {


  return (
    <div style={{ overflowX: "auto", fontSize: "14px" }}>
      <table
        style={{ borderCollapse: "collapse", width: "100%", minWidth: "700px" }}
      >
        <thead>
          <tr>
            {table_header.map((header, index) => (
              <th key={index} className="text-left text-gray-400 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table_data.map((row, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-300 duration-100 cursor-pointer border-b-2 border-gray-300 ${index % 2 === 0 ? "bg-purple-50" : "bg-blue-50"
                }`}
            >
              {renderRow
                ? renderRow(row)
                : Object.values(row).map((value, cellIndex) => (
                  <td key={cellIndex} className="p-2">
                    {typeof value === "string" || typeof value === "number"
                      ? value
                      : JSON.stringify(value)}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
