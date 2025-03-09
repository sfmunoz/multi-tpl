import * as React from "react";
import { Table } from "@tanstack/react-table";
import { Payment } from "./Payment";
import PrevNext from "./PrevNext";
import Filter from "./Filter";
import Selector from "./Selector";
import Recap from "./Recap";

interface TableWrapperProps {
  table: Table<Payment>;
  children: React.ReactNode;
}

const TableWrapper = ({ table, children }: TableWrapperProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Filter table={table} />
        <Selector table={table} />
      </div>
      <div className="rounded-md border">{children}</div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Recap table={table} />
        <PrevNext table={table} />
      </div>
    </div>
  );
};

export default TableWrapper;
