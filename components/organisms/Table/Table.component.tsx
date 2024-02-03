import React, { useState } from "react";

interface TableRow {
  id: number;
  [key: string]: any;
}

interface TableProps {
  data: TableRow[];
}

interface SortConfig {
  key: string | null;
  direction: "asc" | "desc";
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: "asc" });

  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    const sortableData = [...data];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} onClick={() => requestSort(column)}>
              {column}
              {sortConfig.key === column && <span>{sortConfig.direction === "asc" ? " 🔼" : " 🔽"}</span>}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData().map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
