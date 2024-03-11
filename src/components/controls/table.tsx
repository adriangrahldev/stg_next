import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import ClientsTableActions from "../clients/clients-table-actions";

interface TableProps {
  data: {
    rows: any[];
    columns: string[];
    actions: {
      edit: boolean;
      delete: boolean;
      view: boolean;
    };
  };
}

const TableUI = ({ data }: TableProps) => {
  return (
    <>
      <Table aria-label="Example table with dynamic content">
        <TableHeader>
          {data.columns.map((column, index) => (
            <TableColumn key={index}>{column}</TableColumn>
          ))}
          {data.actions.view || data.actions.edit || data.actions.delete ? (
            <TableColumn>Ações</TableColumn>
          ) : null as any}
        </TableHeader>
        <TableBody>
          {data.rows.map((row, index) => (
            <TableRow key={index}>
              {row.map((cell: string, index: number) => (
                <TableCell key={index}>{cell}</TableCell>
              ))}
              {
                data.actions.view || data.actions.edit || data.actions.delete ? (
                  <TableCell>
                    <ClientsTableActions clientId={1} />
                  </TableCell>

                    ) : null as any
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableUI;
