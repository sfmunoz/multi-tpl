import * as React from "react";
import { Table } from "@tanstack/react-table";
import { Payment } from "../Payment";
import PrevNext from "../PrevNext";
import Filter from "../Filter";
import Selector from "../Selector";
import Recap from "../Recap";

interface TableWrapperProps {
  table: Table<Payment>;
  children: React.ReactNode;
}

const TableWrapper = ({ table, children }: TableWrapperProps) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center p-4 gap-4">
        <div className="flex flex-row justify-between items-center w-200">
          <Recap table={table} />
          <Filter table={table} />
        </div>
        <div className="flex flex-row justify-between items-center w-200">
          <PrevNext table={table} />
          <Selector table={table} />
        </div>
        <div className="rounded-md border w-200">{children}</div>
      </div>
    </div>
  );
};

export default TableWrapper;
