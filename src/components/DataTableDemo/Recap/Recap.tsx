import { Payment } from "../Payment";
import { Table } from "@tanstack/react-table";

interface RecapProps {
  table: Table<Payment>;
}

const Recap = ({ table }: RecapProps) => {
  return (
    <div className="text-sm text-muted-foreground">
      {table.getFilteredSelectedRowModel().rows.length} of{" "}
      {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
  );
};

export default Recap;
