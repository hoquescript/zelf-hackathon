import { ANALYTIC_DATA } from "@/data/Analytics";
import React, { useState } from "react";

import styles from "./Table.module.scss";
import ANALYTICS_COLUMN from "@/components/templates/analytics/Analytics.component";

interface TableRow {
  id: number;
  [key: string]: any;
}

export interface IColumn {
  label: string;
  accessor: string;
  hasSort?: boolean;
  align?: "center" | "left" | "right";
  cell?: (value: any, row: any) => React.ReactNode;
  width?: Size;
}

interface TableProps {
  data: TableRow[];
  column?: IColumn[];
  className?: string;
}

interface SortConfig {
  key: string | null;
  direction: "asc" | "desc";
}

const Table: React.FC<TableProps> = (props) => {
  const { data, className } = props;
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
    <table className={`${className} ${styles.table}`}>
      <thead>
        <tr>
          {ANALYTICS_COLUMN.map((column) => (
            <th
              key={column.accessor}
              style={{ width: column.width, textAlign: column.align }}
              //  onClick={() => requestSort(column)}
            >
              {column.label}
              {/* {sortConfig.key === column && <span>{sortConfig.direction === "asc" ? " 🔼" : " 🔽"}</span>} */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ANALYTIC_DATA.map((row) => (
          <tr key={row.id}>
            {ANALYTICS_COLUMN.map((column) => (
              <td key={column.accessor} style={{ width: column.width, textAlign: column.align }}>
                {column.cell ? column.cell(row[column.accessor], row) : row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
